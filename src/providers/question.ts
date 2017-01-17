import { Injectable } from '@angular/core';
import { Setup } from './setup';

/*
  Generated class for the Questions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

// Add a State for each question
enum State { 
    Init, 
    Compass, 
    Maps, 
    Cargo, 
    Platform, 
    Expertise, 
    AppType,
    Language, 
    End,
    Reset 
};


// Option class only holds title and subtitle for now,
// Will be able to change on the fly depending on choices?
// TODO: add background image info?
export class Option {
  public title: string;
  public subtitle: string;

  constructor(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

// Dictionary interface for indexing choices
export interface IDictionary {
  [key: string]: Option;
}


@Injectable()
export class Question {

  public text: string;
  public options: Option[] = [];
  public choices: IDictionary = {};

  public state: State; 

  constructor() {
    this.initialize();
  }

  // Initializes to starting state.
  private initialize() {
    this.text = "Let's Set Sail!";
    this.options = [
      new Option("Compass", "Create an app from scratch!"),
      new Option("Maps", "Tutorials"),
      new Option("Cargo", "Sample Applications"),
    ];
    this.state = State.Init;
    this.choices = {};
  }

  public incrementState(option) {


    // TODO: save previous state to handle backwards navigation

    // Push option into choices list
    if (this.state != State.Init) {
      this.choices[this.state] = option;
    }
    
    // Handles state change from question to question
    switch(this.state) {
      case State.Init: {

        switch(option.title) {
          case "Compass": {

            this.text = "App Type?";
            this.options = [
              new Option("iOS", ""),
              new Option("Android", ""),
              new Option("Web", ""),
              new Option("Not Sure...", ""),
            ];

            // Next state
            this.state = State.Expertise;
            break;
          }

          default: {
            break;
          }
        }

        break;
      }

      case State.Expertise: {


        this.text = "Programming Expertise";
        this.options = [
          new Option("n00b", "\"The only code I know is Morse.\""),
          new Option("Beginner", ""),
          new Option("Somewhat Experienced", ""),
          new Option("Experienced", ""),
        ];
        this.state = State.AppType;
        break;
      }

      case State.AppType: {

        this.text = "Type";
        this.options = [
          new Option("Portfolio", ""),
          new Option("Brochure", ""),
          new Option("Ecommerce", ""),
          new Option("Social Media", ""),
          new Option("Game", ""),
        ];
        this.state = State.Language;
        break;
      }

      case State.Language: {

        this.text = "Language";
        this.options = [
          new Option("Python", ""),
          new Option("JavaScript", ""),
          new Option("PHP", ""),
          new Option("C#", ""),
          new Option("Not sure...", ""),
        ];

        this.state = State.End;
        break;
      }

      case State.End: {
        this.text = "Your Choices";
        this.options = [];
        for (var key in this.choices) {
          this.options.push(this.choices[key]);
        }

        //this.options = this.choices;

        // Do something with options
        // TODO: outputs a Build object
        // Build object must contain information regarding:
        // Platform
        // Language
        // Framework List
        // General Tutorial for setup
        // Language Tutorial (for B-)
        // Specific Tutorials (ecommerce, single-page application, etc.)

        var setup = new Setup(this.choices);

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
