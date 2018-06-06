import Comparator from '../../utils/comparator/Comparator';

export default class Sort {
  constructor(original) {
    this.callback = Sort.initSortCallback(original);
    this.comparator = new Comparator(this.comparator.compareCallback);
  }

  static initSortCallback(original) {
    const callback = original || {};
    const stubCallback = () => {};

    callback.compareCallBack = callback.callbacks.compareCallback || undefined;
    callback.visited = callback.visited || stubCallback;

    return callback;
  }
}

