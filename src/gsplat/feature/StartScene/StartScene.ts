import {
  FrameUpdaterCombiner,
  Scene,
  Camera,
  OrbitControls,
} from "@gsplat/core";
import { LoadDefaultModel } from "@gsplat/feature";
import { Splat, Vector3, Quaternion } from "gsplat";
import {
  MathUtils,
  Vector3 as ThreeVector3,
  Quaternion as ThreeQuaternion,
} from "three";

let model: Splat | null = null;

let updateFunction: (() => void) | null = null;

const DEFAULT_CAMERA_POSITION = new Vector3(2.1, -2.4, -3.85);
const DEFAULT_CAMERA_ROTATION = new Quaternion(-0.24, -0.24, -0.06, 0.94);

export const initScene = async () => {
  model = await LoadDefaultModel();

  model.position = new Vector3(
    model.position.x - 1.8,
    model.position.y,
    model.position.z
  );

  updateFunction = () => {
    if (!model) return;
    rotateModel(model);
  };

  Camera.get().position = DEFAULT_CAMERA_POSITION;
  Camera.get().rotation = DEFAULT_CAMERA_ROTATION;

  OrbitControls.get().panSpeed = 0;
  OrbitControls.get().zoomSpeed = 0;
  OrbitControls.get().orbitSpeed = 0;

  FrameUpdaterCombiner.addUpdateFunction(updateFunction);
};

export const clearScene = () => {
  if (updateFunction) {
    FrameUpdaterCombiner.removeUpdateFunction(updateFunction);
  }

  Scene.reset();
  updateFunction = null;
  model = null;
};

const rotateModel = (model: Splat) => {
  const axis = new ThreeVector3(0, 1, 0);
  const angle = MathUtils.degToRad(1);

  const quaternionRotation = new ThreeQuaternion(
    model.rotation.x,
    model.rotation.y,
    model.rotation.z,
    model.rotation.w
  );

  quaternionRotation.setFromAxisAngle(axis, angle);

  model.rotation = model.rotation.multiply(
    new Quaternion(
      quaternionRotation.x,
      quaternionRotation.y,
      quaternionRotation.z,
      quaternionRotation.w
    )
  );
};
