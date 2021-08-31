# Homework for Vue3

### homework for Composition API Introduction
1.Lets build sample app in sample-vue-app folder, follow steps in README file. After build successfully, your browser will be:

You can check my folder.



### homework for API-Store-Component
1.Where is API module, Store module and Component module?

The Store module is in src/stores and the Component module is in src components.
But we don't have API module in this folder.


2.How does the Loading work? (When you click on button - or +, loading will be displayed).

When you click the button in the components of "InjectedDecrementButton.vue" and "InjectedIncrementButton.vue",
the function of "asyncIncrement" and "asyncDecrement" starts to work.
These functions let the "loading status" be "true" and "false".
Btw, these functions are in the stores of "Counter.ts".



### homework for Provide-Inject
1.As you investigated loading function in last homework, lets implement according to Provide-inject for it. (Now, App.vue is passing data to Loading.vue as props.)


You can check my folder for "for homework3" commit.



### homework for Reactive
1.Comeback to sample-vue-app again, Lets implement new function: label value is required from -5 to 5, so:
When increasing over 5, show alert "Value is not greater than 5"
When descreasing below -5, show alert "Value is not less than -5"


You can check my folder for "submit" commit.