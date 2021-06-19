/*
  journal command

  no params

  checks to see if there is a template setup.
  
  if there is no template setup

    ask user if they want to setup a new template

      if the user selects yes ask if the user would like to use a prefilled 
      template or would they like to create a new template.

        if the user does wants to use a prefilled template, copy the sample
        display the sample template file, and then ask the user if they want 
        any updates.

    if the user doesnt want to setup a template save the answer in their config
    file
  
  if there is a template setup
    create a new directory using the current year and month. 

  has param
 In case we want to use the md
 */

const journal = () => {
  console.log(process.argv);
}
