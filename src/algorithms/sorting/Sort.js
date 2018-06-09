import Comparator from '../../utils/comparator/Comparator';

export default class Sort {
  constructor(original) {
    this.callback = Sort.initSortCallback(original);
    this.comparator = new Comparator(this.callback.compareCallback);
  }

  static initSortCallback(original) {
    const callback = original || {};
    const stubCallback = () => {};

    callback.compareCallBack = callback.compareCallback || undefined;
    callback.visitCallback = callback.visitCallback || stubCallback;

    return callback;
  }
  sort() {
    throw new Error('Method name must be implemented');
  }
}

