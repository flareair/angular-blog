'use strict';

export default class menuService {
    constructor() {
        this.activeItem = '/';
    }

    getActiveItem() {
        return this.activeItem;
    }

    setActiveItem(newActiveItem) {
        this.activeItem = newActiveItem;
    }
}