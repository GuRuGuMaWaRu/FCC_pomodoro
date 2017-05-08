import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  CHANGE_RUNTIME,
  RESET_ALL,
  CHOOSE_TIMER,
  UPDATE_SET_TIMERS
} from './types';

export const startStopTimer = (runState) => {
  return {
    type: START_STOP_TIMER,
    payload: runState === 'start' ? true : false
  };
}

export const runTimer = (runningTime) => {
  return {
    type: RUN_TIMER,
    payload: runningTime - 1
  };
}

export const changeTimer = (currentTimer, sessionLength, breakLength) => {
  return {
    type: CHANGE_TIMER,
    payload: {
      timer: currentTimer === 'session' ? 'break' : 'session',
      runningTime: currentTimer === 'session' ? breakLength : sessionLength
    }
  };
}

export const changeTimerLength = (timer, newValue) => {
  console.log(newValue);
  return {
    type: CHANGE_TIMER_LENGTH,
    payload: {
      length: timer === 'session' ? 'sessionLength' : 'breakLength',
      newValue: newValue
    }
  };
}

export const changeRunningTime = (newRunningTime) => {
  return {
    type: CHANGE_RUNTIME,
    payload: newRunningTime
  };
}

export const resetAll = () => {
  return {
    type: RESET_ALL
  };
}

export const chooseTimer = (sessionLength, breakLength) => {
  return {
    type: CHOOSE_TIMER,
    payload: { sessionLength, breakLength }
  };
}

export const updateSetTimers = (newTimers) => {
  return {
    type: UPDATE_SET_TIMERS,
    payload: newTimers
  };
}
