# Web Automation Project - login and ticket movie purchase


## Description

This project is based on automated testing of the Cinemark website, which allows me to buy movie tickets and candy. Currently, the entire flow of purchasing a ticket is automated.
The project structure uses the cypress framework, with javascript programming language.

## Getting Started

### Project Structure
-  cypress/e2e/scenarios: Contains the scenarios in Gherkin language.
-  cypress/e2e/step_definitions: Contains the methods invoked by the scenario generated with gherkin
-  cypress/e2e/tasks: Contains the tasks that are used in the execution of the tests.
-  cypress/support: Holds custom commands and reusable functions.
-  cypress/videos: Stores video recordings of test runs failed.
-  cypress/screenshots: Saves screenshots taken during test runs.

### Dependencies

Ensure you have the following installed:
- Node.js (version 12 or higher recommended)
- Cypress (version 7 or higher recommended)

### Setting Up

1. **Clone the Repository**
   - Use `git clone https://github.com/MarcoMayo/SunDevs_ProjectWEB` to clone the project to your local machine.
2. **Navigate to Project Directory**
   - Change into the project's directory with `cd SunDevs_ProjectWEB`.
3. **Install Dependencies**
   - Run `npm install` to install the required Node.js and Cypress dependencies.

### Running Tests

- Open Cypress Test Runner with `npx cypress open` and select the spec.
- Run tests in headless mode `npx cypress run` for run all scenarios.
- Or `npx cypress run --spec cypress\e2e\scenarios\buy_ticket_for_movie.feature` for one Scenery


### Videos
- Video WEB: https://drive.google.com/file/d/1Tqho5Ep_sVFWhvyxF5Lho4D9iVmh9XoB/view?usp=sharing
- Reporte en .ZIP: https://drive.google.com/file/d/1N87wA9ytJxNyvIeIlTGk8AAReXXsn362/view?usp=sharing
- Video presentación(Contiene ambos videos): https://drive.google.com/file/d/1ECR1m7zHMHldQ1KnaUjONNtPqqgQ0toH/view?usp=sharing
