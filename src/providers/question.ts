import { Injectable } from '@angular/core';

/*
  Generated class for the Questions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

enum State { 
    Init, 
    Compass, 
    Maps, 
    Cargo, 
    Platform, 
    Expertise, 
    Language, 
    End,
    Reset 
};

export class Option {
  public title: string;
  public subtitle: string;

  constructor(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

@Injectable()
export class Question {

  public text: string;
  public options: Option[] = [];
  public choices: Option[] = [];

  private state: State; 

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.text = "Let's Set Sail!";
    this.options = [
      new Option("Compass", "Create an app from scratch!"),
      new Option("Maps", "Tutorials"),
      new Option("Cargo", "Sample Applications"),
    ];
    this.state = State.Init;
    this.choices = [];
  }

  public incrementState(option) {

    // Push option into choices stack
    if (option.title != "Maps" && option.title != "Cargo") {
      this.choices.push(option);
    }
    

    switch(this.state) {
      case State.Init: {

        switch(option.title) {
          case "Compass": {
            this.text = "App Type?";
            this.options = [
              new Option("iOS", ""),
              new Option("Android", ""),
              new Option("Web", ""),
              new Option("All 3!", ""),
              new Option("None of the above", "")
            ];
            this.state = State.Platform;
            break;
          }

          default: {
            break;
          }
        }
        break;
      }

      case State.Platform: {
        // TODO: Go to actual next state
        this.state = State.End;
      }

      case State.End: {
        this.text = "Your Choices";
        this.options = this.choices;

        this.state = State.Reset;
        break;
      }

      default: {
        this.initialize();
        break;
      }
    }
  }
}
