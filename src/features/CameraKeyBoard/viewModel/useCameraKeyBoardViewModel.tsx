import { OrbitControls } from "@gsplat/core";

export type CameraKeyBoardViewModel = {
  handleStartMovingLeft: () => void;
  handleStopMovingLeft: () => void;

  handleStartMovingRight: () => void;
  handleStopMovingRight: () => void;

  handleStartMovingForward: () => void;
  handleStopMovingForward: () => void;

  handleStartMovingBack: () => void;
  handleStopMovingBack: () => void;

  handleStartRotateLeft: () => void;
  handleStopRotateLeft: () => void;

  handleStartRotateRight: () => void;
  handleStopRotateRight: () => void;

  handleStartRotateTop: () => void;
  handleStopRotateTop: () => void;

  handleStartRotateBottom: () => void;
  handleStopRotateBottom: () => void;
};

export const useCameraKeyBoardViewModel = (): CameraKeyBoardViewModel => {
  const handleStartMovingLeft = () => {
    OrbitControls.startMovingLeft();
  };

  const handleStopMovingLeft = () => {
    OrbitControls.stopMovingLeft();
  };

  const handleStartMovingRight = () => {
    OrbitControls.startMovingRight();
  };

  const handleStopMovingRight = () => {
    OrbitControls.stopMovingRight();
  };

  const handleStartMovingForward = () => {
    OrbitControls.startMovingForward();
  };

  const handleStopMovingForward = () => {
    OrbitControls.stopMovingForward();
  };

  const handleStartMovingBack = () => {
    OrbitControls.startMovingBack();
  };

  const handleStopMovingBack = () => {
    OrbitControls.stopMovingBack();
  };

  const handleStartRotateLeft = () => {
    OrbitControls.startRotateLeft();
  };

  const handleStopRotateLeft = () => {
    OrbitControls.stopRotateLeft();
  };

  const handleStartRotateRight = () => {
    OrbitControls.startRotateRight();
  };

  const handleStopRotateRight = () => {
    OrbitControls.stopRotateRight();
  };

  const handleStartRotateTop = () => {
    OrbitControls.startRotateTop();
  };

  const handleStopRotateTop = () => {
    OrbitControls.stopRotateTop();
  };

  const handleStartRotateBottom = () => {
    OrbitControls.startRotateBottom();
  };

  const handleStopRotateBottom = () => {
    OrbitControls.stopRotateBottom();
  };

  return {
    handleStartMovingLeft,
    handleStopMovingLeft,
    handleStartMovingRight,
    handleStopMovingRight,
    handleStartMovingForward,
    handleStopMovingForward,
    handleStartMovingBack,
    handleStopMovingBack,
    handleStartRotateLeft,
    handleStopRotateLeft,
    handleStartRotateRight,
    handleStopRotateRight,
    handleStartRotateTop,
    handleStopRotateTop,
    handleStartRotateBottom,
    handleStopRotateBottom,
  };
};
