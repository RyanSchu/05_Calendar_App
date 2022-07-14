# Work Day Scheduler Starter Code


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### pseudocode

```
first get hour
also get any objects from local storage
set header
get an array of hours
for each hour
  create a row which should contain an hour, a textarea description, and a save button
  also compare hour to current time
  add correct content
  add event listener to button
  append children to row and row to document
  
event listener
  should get value of textarea of the corresponding hour 
  -they should share an attribute that ties them together
  then updates an object at the corresponding attribute
  object that saves in local storage

```


https://ryanschu.github.io/05_Calendar_App/

