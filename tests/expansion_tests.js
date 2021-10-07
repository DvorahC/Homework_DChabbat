import { Selector } from 'testcafe'; 

fixture `Angular page tests`
    .page `https://material.angular.io/components/expansion/examples`; 

const name = Selector('#mat-input-0');
const age = Selector('#mat-input-1');
const date = Selector('#mat-input-3');
const calendar = Selector('.mat-calendar-body');
const row  = calendar.find('tr').nth(2);
const cell = row.find('td').nth(4).child('div');

test('Accordion with expand/collapse', async t => {
    await t
        .click(Selector('span').withText('Personal data'))
        .typeText(name,'John')
        .typeText(age,'26')
        .click(Selector('span').withText('Day of the trip'))
        .click(date)
        .click(cell)
        .expect(date.value).eql('10/14/2021')
        .expect(name.value).eql('John')
        .expect(age.value).eql('26');
});

const expansionPanelAsAccordion = Selector('#mat-expansion-panel-header-5');
const nameExpansionPanel = Selector('#mat-input-4');
const ageExpansionPanel = Selector('#mat-input-5');
const nextButton = Selector('span').withText('Next');
//const previousButton = Selector('span').withText('Previous');
const destination = Selector('#mat-input-6');
const date_second = Selector('#mat-input-7');


const Next_second = Selector('#cdk-accordion-child-6')
    .child('mat-action-row')
    .child('button')
    .child('span')
    .withText('Next');

const previousSecond = Selector('#cdk-accordion-child-7')
    .child('mat-action-row')
    .child('button')
    .child('span')
    .withText('Previous');    

test('Expansion pannel as accordion', async t => {
    await t
        .hover(expansionPanelAsAccordion)
        .click(Selector('span').withText('Personal data'))
        .typeText(nameExpansionPanel, 'Sarah')
        .typeText(ageExpansionPanel,'36')
        .click(nextButton)
        .typeText(destination, 'Israel')
        .click(Next_second)
        .click(date_second)
        .click(cell)
        .expect(date_second.value).eql('10/14/2021')
        .click(previousSecond)
        .expect(destination.value).eql('Israel');
});


