class AngularExpension {
    constructor () {

    this.nameInAccordionWithExpand = Selector('#mat-input-0');
    this.ageInAccordionWithExpand = Selector('#mat-input-1');
    this.dateInAccordionWithExpand = Selector('#mat-input-3');

    }

    async typeNameInAccordionWithExpand(name) {
        await t.typeText(this.nameInAccordionWithExpand, name);
    }

    async typeAgeInAccordionWithExpand(age) {
        await t.typeText(this.ageInAccordionWithExpand, age);
    }

    async typeDateInAccordionWithExpand(date) {
        await t.typeText(this.dateInAccordionWithExpand, date);
    }
}

export default new AngularExpension();
