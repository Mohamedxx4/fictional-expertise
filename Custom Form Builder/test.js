const toolbox = document.querySelectorAll('.drag-item');
const formArea = document.getElementById('form-area');

// Add drag event listeners to toolbox items
toolbox.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('type', e.target.dataset.type);
  });
});

// Allow drop in the form area
formArea.addEventListener('dragover', e => e.preventDefault());

formArea.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('type');


    //                                              INPUT TEXT FIELD

    if (type === 'input') {
        // Create a container for the input element
        const inputWrapper = document.createElement('div');
        inputWrapper.style.marginBottom = '10px';
        inputWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
        inputWrapper.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow
        inputWrapper.style.borderRadius = '8px'; // Rounded corners
        inputWrapper.style.padding = '15px'; // Padding inside the wrapper
        
        // Create a label container to hold label, edit icon, and delete icon
        const labelContainer = document.createElement('div');
        labelContainer.style.display = 'flex';
        labelContainer.style.alignItems = 'center';
        labelContainer.style.marginBottom = '10px';
        labelContainer.style.justifyContent = 'space-between';
        
        // Create a label element
        const label = document.createElement('label');
        label.textContent = 'Enter Question';
        label.style.fontWeight = 'bold';
        label.style.color = 'black'; // Text always black
        labelContainer.appendChild(label);
        
        // Create an icon container for edit and delete icons
        const iconContainer = document.createElement('div');
        iconContainer.style.display = 'flex';
        iconContainer.style.gap = '10px';
        
        // Create an edit icon using Font Awesome
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666'; // Slightly dark color
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit'; // Tooltip text
        // Add transition for smooth color change
        editIcon.style.transition = 'color 0.3s ease'; // Transition for color property
        // Add hover effect to darken the color
        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF'; // Darker color on hover
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666'; // Original color
        });
        iconContainer.appendChild(editIcon);
        
        // Create a delete icon using Font Awesome
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666'; // Slightly dark color
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete'; // Tooltip text
        // Add transition for smooth color change
        deleteIcon.style.transition = 'color 0.3s ease'; // Transition for color property
        // Add hover effect to change color to red
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000'; // Red color on hover
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666'; // Original color
        });
        iconContainer.appendChild(deleteIcon);
        
        // Append the icon container to the label container
        labelContainer.appendChild(iconContainer);
        
        // Append label container to the input wrapper
        inputWrapper.appendChild(labelContainer);
        
        // Create the text input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.style.width = '100%'; // Reduce width for padding
        inputField.style.padding = '8px';
        inputField.style.border = '1px solid #ddd';
        inputField.style.borderRadius = '4px';
        inputField.style.boxSizing = 'border-box';
        inputWrapper.appendChild(inputField);
        
        // Function to open the modal for label customization
        const openModalForLabel = () => {
            // Create the modal
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.background = '#f9f9f9';
            modal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            modal.style.padding = '20px';
            modal.style.borderRadius = '8px';
            modal.style.zIndex = '1000';
            modal.style.width = '300px'; // Set a fixed width for a consistent layout
            
            // Get the current text from the label
            const currentText = label.textContent || 'Enter Question'; // Default if empty
            
            // Modal content for editing the label
            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.value = currentText; // Set the current label text as the default value
            labelInput.placeholder = 'Enter Question'; // Placeholder for new input
            labelInput.style.width = '95%';
            labelInput.style.padding = '8px';
            labelInput.style.marginBottom = '20px';
            modal.appendChild(labelInput);
            
            // Container for buttons
            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.justifyContent = 'space-between'; // Align buttons side by side
            buttonContainer.style.gap = '10px'; // Space between buttons
            
            // Save button
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.style.flex = '1'; // Buttons will equally share space
            saveButton.style.padding = '10px';
            saveButton.style.backgroundColor = 'black';
            saveButton.style.color = '#fff';
            saveButton.style.fontWeight = 'bold';
            saveButton.style.border = '1px solid #ddd'; // Subtle border
            saveButton.style.borderRadius = '4px';
            saveButton.style.cursor = 'pointer';
            saveButton.style.transition = 'background-color 0.3s ease';
            saveButton.addEventListener('mouseover', () => {
                saveButton.style.backgroundColor = '#007BFF '; // Darker color on hover
            });
            saveButton.addEventListener('mouseout', () => {
                saveButton.style.backgroundColor = 'black'; // Darker color on hover
            });
            saveButton.addEventListener('click', () => {
                const newText = labelInput.value.trim();
                if (newText) {
                    label.textContent = newText; // Update the label text
                    document.body.removeChild(modal); // Close modal
                    document.body.removeChild(backdrop);
                } else {
                    alert('Input cannot be empty!'); // Notify if input is empty
                }
            });
            buttonContainer.appendChild(saveButton);
        
            // Cancel button
            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.style.flex = '1'; // Buttons will equally share space
            cancelButton.style.padding = '10px';
            cancelButton.style.backgroundColor = 'black';
            cancelButton.style.color = '#fff';
            cancelButton.style.fontWeight = 'bold';
            cancelButton.style.border = '1px solid #ddd'; // Subtle border
            cancelButton.style.borderRadius = '4px';
            cancelButton.style.cursor = 'pointer';
            cancelButton.style.transition = 'background-color 0.3s ease';
            cancelButton.addEventListener('click', () => {
                document.body.removeChild(modal); // Close modal
                document.body.removeChild(backdrop);
            });

            cancelButton.addEventListener('mouseover', () => {
                cancelButton.style.backgroundColor = '#FF0000';
            });

            cancelButton.addEventListener('mouseout', () => {
                cancelButton.style.backgroundColor = 'black';
            });
            buttonContainer.appendChild(cancelButton);
        
            // Append button container to the modal
            modal.appendChild(buttonContainer);
        
            // Add backdrop
            const backdrop = document.createElement('div');
            backdrop.style.position = 'fixed';
            backdrop.style.top = '0';
            backdrop.style.left = '0';
            backdrop.style.width = '100%';
            backdrop.style.height = '100%';
            backdrop.style.background = 'rgba(0,0,0,0.1)';
            backdrop.style.zIndex = '999';
        
            // Append modal and backdrop
            document.body.appendChild(backdrop);
            document.body.appendChild(modal);
        };
        
        // Open modal instantly after the element is added
        openModalForLabel();
        
        // Add click event to the edit icon
        editIcon.addEventListener('click', openModalForLabel);
        
        // Add click event to the delete icon to remove the inputWrapper
        deleteIcon.addEventListener('click', () => {
            formArea.removeChild(inputWrapper);
        });
        
        // Append the input wrapper to the form area
        formArea.appendChild(inputWrapper);
    }
    
    
    
    
    
    
    
    
    
  
  




  //                                                 BUTTON CREATION
  else if (type === 'button') {
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.style.background = '#007BFF'; // Primary button color
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.padding = '10px 20px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = 'bold';
    button.style.marginTop = '20px';

    // Add the button to the form area
    formArea.appendChild(button);

    // Add an event listener for form submission
    button.addEventListener('click', function () {
        const formInputs = formArea.querySelectorAll('input[type="number"]');
        const formData = {};

        // Collect data from all input fields
        formInputs.forEach(input => {
            const label = input.previousElementSibling.textContent; // Get the label text
            formData[label] = parseFloat(input.value) || 0; // Use 0 if the input is empty
        });

        console.log('Form Data:', formData); // Log the collected data
        alert('Form submitted! Check the console for data.');

        // Optionally, clear the form area after submission
        formArea.innerHTML = '';
    });
}




  //                                                HEADING CREATION
  else if (type === 'heading') {
    // Create a container for the heading element
    const headingWrapper = document.createElement('div');
    headingWrapper.style.marginBottom = '10px';
    headingWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
    headingWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow
    headingWrapper.style.borderRadius = '8px'; // Rounded corners
    headingWrapper.style.padding = '15px'; // Padding inside the wrapper
    headingWrapper.style.display = 'flex'; // For positioning icons
    headingWrapper.style.alignItems = 'center'; // Align content vertically

    // Create the heading element
    const heading = document.createElement('h2');
    heading.textContent = 'Heading Text';
    heading.style.flex = '1'; // Allow heading to take available space
    heading.style.textAlign = 'center'; // Align text to the center
    headingWrapper.appendChild(heading);

    // Create an icon container for edit and delete icons
    const iconContainer = document.createElement('div');
    iconContainer.style.display = 'flex';
    iconContainer.style.gap = '10px';

    // Create an edit icon with specified styles
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666';
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit';
    editIcon.style.transition = 'color 0.3s ease'; // Smooth transition

    editIcon.addEventListener('mouseover', () => {
        editIcon.style.color = '#007BFF'; // Darker color on hover
    });
    editIcon.addEventListener('mouseout', () => {
        editIcon.style.color = '#666666'; // Original color
    });

    iconContainer.appendChild(editIcon);

    // Create a delete icon with specified styles
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666';
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete';
    deleteIcon.style.transition = 'color 0.3s ease'; // Smooth transition

    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Red color on hover
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Original color
    });

    iconContainer.appendChild(deleteIcon);

    // Append icons to the wrapper
    headingWrapper.appendChild(iconContainer);

    // Function to open modal for editing heading text
    const openModalForHeading = () => {
        // Create the modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = '#f9f9f9';
        modal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        modal.style.padding = '20px';
        modal.style.borderRadius = '8px';
        modal.style.zIndex = '1000';

        // Create the modal content
        const modalContent = document.createElement('div');

        // Heading customization input
        const headingLabel = document.createElement('label');
        headingLabel.textContent = 'Heading Text:';
        headingLabel.style.display = 'block';
        headingLabel.style.marginBottom = '5px';
        modalContent.appendChild(headingLabel);

        const headingInput = document.createElement('input');
        headingInput.type = 'text';
        headingInput.value = heading.textContent;
        headingInput.style.width = '92%';
        headingInput.style.padding = '8px';
        headingInput.style.marginBottom = '10px';
        modalContent.appendChild(headingInput);

        // Buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.justifyContent = 'flex-end';
        buttonsContainer.style.gap = '10px';

        // Save Button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.flex = '1'; // Buttons will equally share space
        saveButton.style.padding = '10px';
        saveButton.style.backgroundColor = 'black'; 
        saveButton.style.color = '#fff'; 
        saveButton.style.fontWeight = 'bold';
        saveButton.style.border = '1px solid #ddd'; // Subtle border
        saveButton.style.borderRadius = '4px';
        saveButton.style.cursor = 'pointer';
        saveButton.style.transition = 'background-color 0.3s ease';

        saveButton.addEventListener('mouseover', () => {
            saveButton.style.backgroundColor = '#007BFF';
        });

        saveButton.addEventListener('mouseout',()=>{
            saveButton.style.backgroundColor = 'black';
        });

        saveButton.addEventListener('click', () => {
            // Update the heading text
            heading.textContent = headingInput.value || 'Heading Text';

            // Close the modal
            document.body.removeChild(modal);
            document.body.removeChild(backdrop);
        });

        buttonsContainer.appendChild(saveButton);

        // Cancel Button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.flex = '1'; // Buttons will equally share space
        cancelButton.style.padding = '10px';
        cancelButton.style.backgroundColor = 'black'; 
        cancelButton.style.color = '#fff';
        cancelButton.style.fontWeight = 'bold';
        cancelButton.style.border = '1px solid #ddd'; // Subtle border
        cancelButton.style.borderRadius = '4px';
        cancelButton.style.cursor = 'pointer';
        cancelButton.style.transition = 'background-color 0.3s ease';

        cancelButton.addEventListener('mouseover', () => {
            cancelButton.style.backgroundColor = '#FF0000';
        });

        cancelButton.addEventListener('mouseout', () => {
            cancelButton.style.backgroundColor = 'black';
        });

        cancelButton.addEventListener('click', () => {
            // Close the modal without saving changes
            document.body.removeChild(modal);
            document.body.removeChild(backdrop);
        });

        buttonsContainer.appendChild(cancelButton);

        modalContent.appendChild(buttonsContainer);

        // Append modal content to the modal
        modal.appendChild(modalContent);

        // Add a backdrop for the modal
        const backdrop = document.createElement('div');
        backdrop.style.position = 'fixed';
        backdrop.style.top = '0';
        backdrop.style.left = '0';
        backdrop.style.width = '100%';
        backdrop.style.height = '100%';
        backdrop.style.background = 'rgba(0,0,0,0.1)';
        backdrop.style.zIndex = '999';

        // Append modal and backdrop to the body
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);
    };

    // Open the modal instantly after drag-and-drop
    openModalForHeading();

    // Add click event for the edit icon to reopen the modal
    editIcon.addEventListener('click', openModalForHeading);

    // Add click event for the delete icon
    deleteIcon.addEventListener('click', () => {
        formArea.removeChild(headingWrapper);
    });

    // Append the heading wrapper to the form area
    formArea.appendChild(headingWrapper);
}



  
  

  //                                                DESCRIPTION CREATION
  else if (type === 'description') {
    // Create a container for the description element
    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.style.marginBottom = '10px';
    descriptionWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
    descriptionWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow
    descriptionWrapper.style.borderRadius = '8px'; // Rounded corners
    descriptionWrapper.style.padding = '15px'; // Padding inside the wrapper
    descriptionWrapper.style.display = 'flex'; // For positioning icons
    descriptionWrapper.style.alignItems = 'center'; // Align content vertically

    // Create the description element
    const description = document.createElement('h5');
    description.textContent = 'Description text goes here';
    description.style.flex = '1'; // Allow description to take available space
    description.style.textAlign = 'center'; // Align text to the center
    descriptionWrapper.appendChild(description);

    // Create an icon container for edit and delete icons
    const iconContainer = document.createElement('div');
    iconContainer.style.display = 'flex';
    iconContainer.style.gap = '10px';

    // Create an edit icon
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square';
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666';
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit';
    editIcon.style.transition = 'color 0.3s ease';
    editIcon.addEventListener('mouseover', () => editIcon.style.color = '#007BFF');
    editIcon.addEventListener('mouseout', () => editIcon.style.color = '#666666');
    iconContainer.appendChild(editIcon);

    // Create a delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can';
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666';
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete';
    deleteIcon.style.transition = 'color 0.3s ease';
    deleteIcon.addEventListener('mouseover', () => deleteIcon.style.color = '#FF0000');
    deleteIcon.addEventListener('mouseout', () => deleteIcon.style.color = '#666666');
    iconContainer.appendChild(deleteIcon);

    // Append icons to the wrapper
    descriptionWrapper.appendChild(iconContainer);

    // Function to open modal for editing description text
    const openModalForDescription = () => {
        // Create the modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = '#f9f9f9';
        modal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        modal.style.padding = '20px';
        modal.style.borderRadius = '8px';
        modal.style.zIndex = '1000';

        // Create the modal content
        const modalContent = document.createElement('div');

        // Description customization input
        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description Text:';
        descriptionLabel.style.display = 'block';
        descriptionLabel.style.marginBottom = '5px';
        modalContent.appendChild(descriptionLabel);

        const descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.value = description.textContent;
        descriptionInput.style.width = '92%';
        descriptionInput.style.padding = '8px';
        descriptionInput.style.marginBottom = '10px';
        modalContent.appendChild(descriptionInput);

        // Buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.justifyContent = 'flex-end';
        buttonsContainer.style.gap = '10px';

        // Save Button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.flex = '1'; // Buttons will equally share space
        saveButton.style.padding = '10px';
        saveButton.style.backgroundColor = 'black'; 
        saveButton.style.color = '#fff'; 
        saveButton.style.fontWeight = 'bold';
        saveButton.style.border = '1px solid #ddd'; // Subtle border
        saveButton.style.borderRadius = '4px';
        saveButton.style.cursor = 'pointer';
        saveButton.style.transition = 'background-color 0.3s ease';

        saveButton.addEventListener('mouseover', () => {
            saveButton.style.backgroundColor = '#007BFF'
        });
        saveButton.addEventListener('mouseout', () => {
            saveButton.style.backgroundColor = 'black'
        });

        saveButton.addEventListener('click', () => {
            // Update the description text
            description.textContent = descriptionInput.value || 'Description text goes here.';

            // Close the modal
            document.body.removeChild(modal);
            document.body.removeChild(backdrop);
        });

        buttonsContainer.appendChild(saveButton);

        // Cancel Button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.flex = '1'; // Buttons will equally share space
        cancelButton.style.padding = '10px';
        cancelButton.style.backgroundColor = 'black'; 
        cancelButton.style.color = '#fff';
        cancelButton.style.fontWeight = 'bold';
        cancelButton.style.border = '1px solid #ddd'; // Subtle border
        cancelButton.style.borderRadius = '4px';
        cancelButton.style.cursor = 'pointer';
        cancelButton.style.transition = 'background-color 0.3s ease';

        cancelButton.addEventListener('mouseover', () => {
            cancelButton.style.backgroundColor = '#FF0000';
        });
        cancelButton.addEventListener('mouseout', () => {
            cancelButton.style.backgroundColor = 'black';
        });

        cancelButton.addEventListener('click', () => {
            // Close the modal without saving changes
            document.body.removeChild(modal);
            document.body.removeChild(backdrop);
        });

        buttonsContainer.appendChild(cancelButton);

        modalContent.appendChild(buttonsContainer);

        // Append modal content to the modal
        modal.appendChild(modalContent);

        // Add a backdrop for the modal
        const backdrop = document.createElement('div');
        backdrop.style.position = 'fixed';
        backdrop.style.top = '0';
        backdrop.style.left = '0';
        backdrop.style.width = '100%';
        backdrop.style.height = '100%';
        backdrop.style.background = 'rgba(0,0,0,0.1)';
        backdrop.style.zIndex = '999';

        // Append modal and backdrop to the body
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);
    };

    // Open the modal instantly after drag-and-drop
    openModalForDescription();

    // Add click event for the edit icon to reopen the modal
    editIcon.addEventListener('click', openModalForDescription);

    // Add click event for the delete icon
    deleteIcon.addEventListener('click', () => {
        formArea.removeChild(descriptionWrapper);
    });

    // Append the description wrapper to the form area
    formArea.appendChild(descriptionWrapper);
}




  

  //                                                   RADIO BUTTONS
  else if (type === 'radio-group') {
    // Create a container for the modal-like input form
    const modalWrapper = document.createElement('div');
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = '50%';
    modalWrapper.style.left = '50%';
    modalWrapper.style.transform = 'translate(-50%, -50%)';
    modalWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
    modalWrapper.style.padding = '20px 30px 20px 20px'; // Added padding on the right
    modalWrapper.style.borderRadius = '8px';
    modalWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modalWrapper.style.zIndex = '1000';

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    backdrop.style.zIndex = '999';

    modalWrapper.innerHTML = `
  <style>
    #save-radio-group:hover {
        background-color: #007BFF !important;
    }
    #cancel-radio-group:hover {
        background-color: #FF0000 !important;
    }
  </style>
  <label for="radio-label" style="margin-bottom: 10px; display: block;">Enter Question:</label>
  <input type="text" id="radio-label" placeholder="Enter Question" style="width: 97%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 20px;">
  <label for="radio-options" style="margin-bottom: 10px; display: block;">Radio Button Options (one per line):</label>
  <textarea id="radio-options" placeholder="Enter options, one per line" style="width: 97%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 20px; height: 100px;"></textarea>
  <div style="display: flex; justify-content: space-between; gap: 10px;">
      <button id="save-radio-group" style="flex: 1; padding: 10px; background-color: black; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold; transition: background-color 0.3s ease;">Save</button>
      <button id="cancel-radio-group" style="flex: 1; padding: 10px; background-color: black; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold; transition: background-color 0.3s ease;">Cancel</button>
  </div>
`;

    document.body.appendChild(modalWrapper);
    document.body.appendChild(backdrop);

    document.getElementById('save-radio-group').addEventListener('click', () => {
        const labelText = document.getElementById('radio-label').value.trim();
        const optionsText = document.getElementById('radio-options').value.trim();

        if (!labelText || !optionsText) {
            alert('Invalid input. Please try again.');
            return;
        }

        modalWrapper.remove();
        backdrop.remove();

        const radioGroupWrapper = document.createElement('div');
        radioGroupWrapper.style.marginBottom = '20px';
        radioGroupWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
        radioGroupWrapper.style.padding = '15px';
        radioGroupWrapper.style.borderRadius = '8px';
        radioGroupWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        radioGroupWrapper.style.position = 'relative';

        // Create label with edit and delete icons
        const labelWrapper = document.createElement('div');
        labelWrapper.style.display = 'flex';
        labelWrapper.style.alignItems = 'center';
        labelWrapper.style.marginBottom = '10px';
        labelWrapper.style.justifyContent = 'space-between';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontWeight = 'bold';
        label.style.color = 'black';

        const iconContainer = document.createElement('div');
        iconContainer.style.display = 'flex';
        iconContainer.style.gap = '10px';

        // Create edit icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square';
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666';
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit';
        editIcon.style.transition = 'color 0.3s ease';
        editIcon.addEventListener('mouseenter', () => editIcon.style.color = '#007BFF');
        editIcon.addEventListener('mouseleave', () => editIcon.style.color = '#666666');
        iconContainer.appendChild(editIcon);

        // Create delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can';
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.transition = 'color 0.3s ease';
        deleteIcon.addEventListener('mouseenter', () => deleteIcon.style.color = '#FF0000');
        deleteIcon.addEventListener('mouseleave', () => deleteIcon.style.color = '#666666');
        iconContainer.appendChild(deleteIcon);

        deleteIcon.addEventListener('click', () => {
            formArea.removeChild(radioGroupWrapper);
        });

        editIcon.addEventListener('click', () => {
            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.value = label.textContent;

            label.textContent = '';
            label.appendChild(labelInput);
            labelInput.focus();

            labelInput.addEventListener('blur', () => {
                label.textContent = labelInput.value;
                labelInput.remove();
            });

            labelInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    label.textContent = labelInput.value;
                    labelInput.remove();
                }
            });
        });

        labelWrapper.appendChild(label);
        labelWrapper.appendChild(iconContainer);
        radioGroupWrapper.appendChild(labelWrapper);

        // Create the radio buttons vertically
        const optionsContainer = document.createElement('div');
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column'; // Stack items vertically
        optionsContainer.style.gap = '10px'; // Space between radio buttons

        const options = optionsText.split('\n');
        options.forEach(option => {
            const trimmedOption = option.trim();
            if (trimmedOption) {
                const radioLabel = document.createElement('label');
                radioLabel.style.display = 'flex';
                radioLabel.style.alignItems = 'center';

                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'options';
                radioInput.value = trimmedOption;

                radioLabel.appendChild(radioInput);
                radioLabel.appendChild(document.createTextNode(` ${trimmedOption}`));

                optionsContainer.appendChild(radioLabel);
            }
        });

        radioGroupWrapper.appendChild(optionsContainer);
        formArea.appendChild(radioGroupWrapper);
    });

    document.getElementById('cancel-radio-group').addEventListener('click', () => {
        modalWrapper.remove();
        backdrop.remove();
    });
}







//                                                    CHECKBOX GROUP 
else if (type === 'checkbox-group') {
    // Create a container for the modal-like input form
    const modalWrapper = document.createElement('div');
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = '50%';
    modalWrapper.style.left = '50%';
    modalWrapper.style.transform = 'translate(-50%, -50%)';
    modalWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
    modalWrapper.style.padding = '20px 30px 20px 20px'; // Fix for right spacing
    modalWrapper.style.border = '1px solid #ddd';
    modalWrapper.style.borderRadius = '8px'; // Rounded corners
    modalWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Subtle shadow
    modalWrapper.style.width = '300px'; // Fixed width for uniformity
    modalWrapper.style.zIndex = '1000';

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    backdrop.style.zIndex = '999';

    modalWrapper.innerHTML = `
    <style>
    #save-checkbox-group:hover{
    background-color: #007BFF !important;
    }
    #cancel-checkbox-group:hover{
    background-color: #FF0000 !important;
    }
    </style>
      <h3 style="margin-bottom: 10px;">Customize Checkbox Group</h3>
      <input type="text" id="checkbox-label" placeholder="Enter label text" 
        style="width: calc(100% - 30px); padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;">
      <textarea id="checkbox-options" placeholder="Enter options, one per line" 
        style="width: calc(100% - 30px); height: 100px; padding: 8px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
      <div style="display: flex; gap: 10px;">
        <button id="save-checkbox-group" 
          style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Save</button>
        <button id="cancel-checkbox-group" 
          style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease;  border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Cancel</button>
      </div>
    `;

    document.body.appendChild(modalWrapper);
    document.body.appendChild(backdrop);

    document.getElementById('save-checkbox-group').addEventListener('click', () => {
        const labelText = document.getElementById('checkbox-label').value.trim();
        const optionsText = document.getElementById('checkbox-options').value.trim();

        if (!labelText || !optionsText) {
            alert('Invalid input. Please try again.');
            return;
        }

        modalWrapper.remove();
        backdrop.remove();

        const checkboxGroupWrapper = document.createElement('div');
        checkboxGroupWrapper.style.marginBottom = '20px';
        checkboxGroupWrapper.style.backgroundColor = '#f9f9f9'; // Light background for wrapper
        checkboxGroupWrapper.style.padding = '15px';
        checkboxGroupWrapper.style.borderRadius = '8px';
        checkboxGroupWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        checkboxGroupWrapper.style.position = 'relative';

        // Create label with edit and delete icons
        const labelWrapper = document.createElement('div');
        labelWrapper.style.display = 'flex';
        labelWrapper.style.alignItems = 'center';
        labelWrapper.style.justifyContent = 'space-between';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '10px';

        const actionIcons = document.createElement('div');
        actionIcons.style.display = 'flex';
        actionIcons.style.gap = '10px';

        // Add edit icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666'; // Slightly dark color
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit';
        editIcon.style.transition = 'color 0.3s ease';
        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF';
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666';
        });

        // Add delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666'; // Slightly dark color
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.transition = 'color 0.3s ease';
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000';
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666';
        });

        // Edit functionality
        editIcon.addEventListener('click', () => {
            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.value = label.textContent;

            label.textContent = '';
            label.appendChild(labelInput);
            labelInput.focus();

            labelInput.addEventListener('blur', () => {
                label.textContent = labelInput.value;
                labelInput.remove();
            });

            labelInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    label.textContent = labelInput.value;
                    labelInput.remove();
                }
            });
        });

        // Delete functionality
        deleteIcon.addEventListener('click', () => {
            checkboxGroupWrapper.remove();
        });

        actionIcons.appendChild(editIcon);
        actionIcons.appendChild(deleteIcon);
        labelWrapper.appendChild(label);
        labelWrapper.appendChild(actionIcons);
        checkboxGroupWrapper.appendChild(labelWrapper);

        // Create the checkboxes vertically
        const optionsContainer = document.createElement('div');
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';
        optionsContainer.style.gap = '10px'; // Space between checkboxes

        const options = optionsText.split('\n'); // Split the options into an array
        options.forEach(option => {
            const trimmedOption = option.trim();
            if (trimmedOption) {
                const checkboxLabel = document.createElement('label');
                checkboxLabel.style.display = 'flex';
                checkboxLabel.style.alignItems = 'center';

                const checkboxInput = document.createElement('input');
                checkboxInput.type = 'checkbox';
                checkboxInput.name = 'options';
                checkboxInput.value = trimmedOption;

                checkboxLabel.appendChild(checkboxInput);
                checkboxLabel.appendChild(document.createTextNode(` ${trimmedOption}`));

                optionsContainer.appendChild(checkboxLabel);
            }
        });

        checkboxGroupWrapper.appendChild(optionsContainer);
        formArea.appendChild(checkboxGroupWrapper);
    });

    document.getElementById('cancel-checkbox-group').addEventListener('click', () => {
        modalWrapper.remove();
        backdrop.remove();
    });
}

  





//                                                     SHORT ANSWER
else if (type === 'short-answer') {
    // Create the modal dialog for editing the label
    const modalWrapper = document.createElement('div');
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = '50%';
    modalWrapper.style.left = '50%';
    modalWrapper.style.transform = 'translate(-50%, -50%)';
    modalWrapper.style.backgroundColor = '#f9f9f9';
    modalWrapper.style.padding = '20px 30px 20px 20px';
    modalWrapper.style.border = '1px solid #ddd';
    modalWrapper.style.borderRadius = '10px';
    modalWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modalWrapper.style.zIndex = '1000';

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    backdrop.style.zIndex = '999';

    modalWrapper.innerHTML = `
        <style>
        #save-label:hover{
        background-color: #007BFF !important;
        }
        #cancel-label:hover{
        background-color: #FF0000 !important;
        }
        </style>
        <h3 style="margin-bottom: 10px; font-family: Arial, sans-serif;">Edit Label for Short Answer</h3>
        <input type="text" id="label-text" placeholder="Enter label text" 
               style="width: calc(100% - 40px); margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px;">
        <div style="display: flex; justify-content: space-between;">
            <button id="save-label" style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Save</button>
            <button id="cancel-label" style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease;  border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Cancel</button>
        </div>
    `;

    document.body.appendChild(modalWrapper);
    document.body.appendChild(backdrop);

    document.getElementById('save-label').addEventListener('click', () => {
        const labelText = document.getElementById('label-text').value.trim();

        if (!labelText) {
            alert('Invalid input. Please enter a label.');
            return;
        }

        modalWrapper.remove();
        backdrop.remove();

        const shortAnswerWrapper = document.createElement('div');
        shortAnswerWrapper.style.display = 'flex';
        shortAnswerWrapper.style.flexDirection = 'column';
        shortAnswerWrapper.style.marginBottom = '20px';
        shortAnswerWrapper.style.padding = '15px';
        shortAnswerWrapper.style.backgroundColor = '#f9f9f9';
        shortAnswerWrapper.style.borderRadius = '10px';
        shortAnswerWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        const labelWrapper = document.createElement('div');
        labelWrapper.style.display = 'flex';
        labelWrapper.style.alignItems = 'center';
        labelWrapper.style.justifyContent = 'space-between';
        labelWrapper.style.marginBottom = '10px';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontWeight = 'bold';

        const iconWrapper = document.createElement('div');
        iconWrapper.style.display = 'flex';
        iconWrapper.style.gap = '10px';

        // Edit Icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square';
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666';
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit';
        editIcon.style.transition = 'color 0.3s ease';
        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF';
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666';
        });

        // Delete Icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can';
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.transition = 'color 0.3s ease';
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000';
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666';
        });

        deleteIcon.addEventListener('click', () => {
            shortAnswerWrapper.remove();
        });

        editIcon.addEventListener('click', () => {
            const currentLabelText = label.textContent;
            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.value = currentLabelText;
            labelInput.style.padding = '8px';
            labelInput.style.border = '1px solid #ccc';
            labelInput.style.borderRadius = '5px';

            label.textContent = '';
            label.appendChild(labelInput);
            labelInput.focus();

            labelInput.addEventListener('blur', () => {
                label.textContent = labelInput.value || currentLabelText;
                labelInput.remove();
            });
        });

        iconWrapper.appendChild(editIcon);
        iconWrapper.appendChild(deleteIcon);
        labelWrapper.appendChild(label);
        labelWrapper.appendChild(iconWrapper);
        shortAnswerWrapper.appendChild(labelWrapper);

        const shortAnswer = document.createElement('textarea');
        shortAnswer.placeholder = 'Short answer here...';
        shortAnswer.maxLength = 500;
        shortAnswer.rows = 2;
        shortAnswer.style.width = 'calc(100% - 20px)';
        shortAnswer.style.padding = '8px';
        shortAnswer.style.border = '1px solid #ccc';
        shortAnswer.style.borderRadius = '5px';
        shortAnswer.style.resize = 'none';

        shortAnswerWrapper.appendChild(shortAnswer);
        formArea.appendChild(shortAnswerWrapper);
    });

    document.getElementById('cancel-label').addEventListener('click', () => {
        modalWrapper.remove();
        backdrop.remove();
    });
}


  




//                                                     LONG ANSWER
else if (type === 'long-answer') {
    // Create the modal dialog for editing the label
    const modalWrapper = document.createElement('div');
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = '50%';
    modalWrapper.style.left = '50%';
    modalWrapper.style.transform = 'translate(-50%, -50%)';
    modalWrapper.style.backgroundColor = '#f9f9f9';
    modalWrapper.style.padding = '20px 30px 20px 20px'; // Consistent modal padding
    modalWrapper.style.border = '1px solid #ddd';
    modalWrapper.style.borderRadius = '10px';
    modalWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modalWrapper.style.zIndex = '1000';

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    backdrop.style.zIndex = '999';

    modalWrapper.innerHTML = `
    <style>
    #save-label:hover{
    background-color: #007BFF !important;
    }
    #cancel-label:hover{
    background-color: #FF0000 !important;
    }
    </style>
        <h3 style="margin-bottom: 10px; font-family: Arial, sans-serif;">Edit Label for Long Answer</h3>
        <input type="text" id="label-text" placeholder="Enter label text" 
               style="width: calc(100% - 30px); margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px;">
        <div style="display: flex; justify-content: space-between;">
            <button id="save-label" style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Save</button>
            <button id="cancel-label" style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Cancel</button>
        </div>
    `;

    document.body.appendChild(modalWrapper);
    document.body.appendChild(backdrop);

    document.getElementById('save-label').addEventListener('click', () => {
        const labelText = document.getElementById('label-text').value.trim();

        if (!labelText) {
            alert('Invalid input. Please enter a label.');
            return;
        }

        modalWrapper.remove();
        backdrop.remove();

        // Long Answer Wrapper
        const longAnswerWrapper = document.createElement('div');
        longAnswerWrapper.style.display = 'flex';
        longAnswerWrapper.style.flexDirection = 'column';
        longAnswerWrapper.style.marginBottom = '20px';
        longAnswerWrapper.style.padding = '15px';
        longAnswerWrapper.style.backgroundColor = '#f9f9f9';
        longAnswerWrapper.style.borderRadius = '10px';
        longAnswerWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        // Label Section
        const labelWrapper = document.createElement('div');
        labelWrapper.style.display = 'flex';
        labelWrapper.style.alignItems = 'center';
        labelWrapper.style.justifyContent = 'space-between';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontWeight = 'bold';

        const iconWrapper = document.createElement('div');
        iconWrapper.style.display = 'flex';
        iconWrapper.style.gap = '10px';

        // Create Edit Icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666'; // Slightly dark color
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit';
        editIcon.style.transition = 'color 0.3s ease';

        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF';
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666';
        });

        // Create Delete Icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666'; // Slightly dark color
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.transition = 'color 0.3s ease';

        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000';
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666';
        });

        // Add Delete Icon Functionality
        deleteIcon.addEventListener('click', () => {
            longAnswerWrapper.remove();
        });

        // Add Edit Icon Functionality
        editIcon.addEventListener('click', () => {
            const currentLabelText = label.textContent;
            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.value = currentLabelText;
            labelInput.style.padding = '8px';
            labelInput.style.border = '1px solid #ccc';
            labelInput.style.borderRadius = '5px';

            label.textContent = '';
            label.appendChild(labelInput);
            labelInput.focus();

            labelInput.addEventListener('blur', () => {
                label.textContent = labelInput.value || currentLabelText;
                labelInput.remove();
            });
        });

        iconWrapper.appendChild(editIcon);
        iconWrapper.appendChild(deleteIcon);
        labelWrapper.appendChild(label);
        labelWrapper.appendChild(iconWrapper);
        longAnswerWrapper.appendChild(labelWrapper);

        // Long Answer Textarea
        const longAnswer = document.createElement('textarea');
        longAnswer.placeholder = 'Long answer here...';
        longAnswer.maxLength = 2000;
        longAnswer.rows = 5;
        longAnswer.style.width = '98%'; // Shorter field
        longAnswer.style.padding = '8px';
        longAnswer.style.border = '1px solid #ccc';
        longAnswer.style.borderRadius = '5px';
        longAnswer.style.resize = 'none';

        longAnswerWrapper.appendChild(longAnswer);
        formArea.appendChild(longAnswerWrapper);
    });

    document.getElementById('cancel-label').addEventListener('click', () => {
        modalWrapper.remove();
        backdrop.remove();
    });
}



else if (type === 'email') {
    // Create a container for the label and input field
    const emailWrapper = document.createElement('div');
    emailWrapper.style.display = 'flex';
    emailWrapper.style.flexDirection = 'column'; // Stack elements vertically
    emailWrapper.style.marginBottom = '20px';
    emailWrapper.style.padding = '15px';
    emailWrapper.style.backgroundColor = '#f9f9f9'; // Light background
    emailWrapper.style.borderRadius = '10px';
    emailWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

    // Create the label with an edit icon
    const labelWrapper = document.createElement('div');
    labelWrapper.style.display = 'flex';
    labelWrapper.style.alignItems = 'center';
    labelWrapper.style.justifyContent = 'space-between';

    const label = document.createElement('label');
    label.textContent = 'Enter your E-mail Address'; // Custom label text
    label.style.fontWeight = 'bold';
    label.style.marginBottom = '5px'; // Space between label and input field

    const iconWrapper = document.createElement('div');
    iconWrapper.style.display = 'flex';
    iconWrapper.style.gap = '10px';

    // Edit Icon
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666'; // Slightly dark color
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit'; // Tooltip text

    // Add hover effect for the edit icon
    editIcon.style.transition = 'color 0.3s ease'; // Smooth color transition
    editIcon.addEventListener('mouseover', () => {
        editIcon.style.color = '#007BFF'; // Darker color on hover
    });
    editIcon.addEventListener('mouseout', () => {
        editIcon.style.color = '#666666'; // Original color
    });

    // Edit Icon Functionality
    editIcon.addEventListener('click', () => {
        const currentLabelText = label.textContent;
        const labelInput = document.createElement('input');
        labelInput.type = 'text';
        labelInput.value = currentLabelText;
        labelInput.style.padding = '8px';
        labelInput.style.border = '1px solid #ccc';
        labelInput.style.borderRadius = '5px';

        label.textContent = '';
        label.appendChild(labelInput);
        labelInput.focus();

        labelInput.addEventListener('blur', () => {
            label.textContent = labelInput.value || currentLabelText;
            labelInput.remove();
        });
    });

    // Delete Icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666'; // Slightly dark color
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete'; // Tooltip text

    // Add hover effect for the delete icon
    deleteIcon.style.transition = 'color 0.3s ease'; // Smooth color transition
    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Red color on hover
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Original color
    });

    // Delete Icon Functionality
    deleteIcon.addEventListener('click', () => {
        emailWrapper.remove();
    });

    // Append icons to the icon wrapper
    iconWrapper.appendChild(editIcon);
    iconWrapper.appendChild(deleteIcon);

    // Append label and icon wrapper to the label wrapper
    labelWrapper.appendChild(label);
    labelWrapper.appendChild(iconWrapper);

    // Append label wrapper to the email wrapper
    emailWrapper.appendChild(labelWrapper);

    // Create the email input field
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Ex: user999@gmail.com';
    emailInput.style.width = 'calc(100% - 30px)'; // Shorter right-side width
    emailInput.style.padding = '8px';
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.borderRadius = '5px';

    // Append the input field to the wrapper
    emailWrapper.appendChild(emailInput);

    // Append the wrapper to the form area
    formArea.appendChild(emailWrapper);
}







//                                                     FILE UPLOAD
else if (type === 'file-upload') {
    // Modal wrapper
    const modalWrapper = document.createElement('div');
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = '50%';
    modalWrapper.style.left = '50%';
    modalWrapper.style.transform = 'translate(-50%, -50%)';
    modalWrapper.style.backgroundColor = '#f9f9f9';
    modalWrapper.style.padding = '20px 30px 20px 20px';
    modalWrapper.style.border = '1px solid #ccc';
    modalWrapper.style.borderRadius = '8px';
    modalWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modalWrapper.style.zIndex = '1000';

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    backdrop.style.zIndex = '999';

    modalWrapper.innerHTML = `
    <style>
    #save-file-upload:hover{
    background-color: #007BFF !important;
    }
    #cancel-file-upload:hover{
    background-color: #FF0000 !important;
    }
    </style>
        <h3>Customize File Upload</h3>
        <label for="file-label">Label Text:</label><br>
        <input type="text" id="file-label" placeholder="Enter label text" style="width: 100%; margin-bottom: 10px;"><br>
        <div style="display: flex; justify-content: flex-end;">
            <button id="save-file-upload" style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Save</button>
            <button id="cancel-file-upload" style="flex: 1; padding: 10px; background-color: black; transition: background-color 0.3s ease; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold;">Cancel</button>
        </div>
    `;

    document.body.appendChild(modalWrapper);
    document.body.appendChild(backdrop);

    // Save button event
    document.getElementById('save-file-upload').addEventListener('click', () => {
        const labelText = document.getElementById('file-label').value.trim();

        if (!labelText) {
            alert('Invalid input. Please try again.');
            return;
        }

        modalWrapper.remove();
        backdrop.remove();

        // File upload wrapper
        const fileUploadWrapper = document.createElement('div');
        fileUploadWrapper.style.marginBottom = '20px';
        fileUploadWrapper.style.padding = '10px';
        fileUploadWrapper.style.border = '1px solid #ccc';
        fileUploadWrapper.style.borderRadius = '8px';
        fileUploadWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        fileUploadWrapper.style.position = 'relative';
        fileUploadWrapper.style.backgroundColor = '#f9f9f9';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '5px';

        // Edit and delete icons
        const iconWrapper = document.createElement('div');
        iconWrapper.style.display = 'flex';
        iconWrapper.style.justifyContent = 'flex-end'; 
        iconWrapper.style.position = 'absolute';
        iconWrapper.style.top = '10px';
        iconWrapper.style.right = '10px';

        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666';
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit';
        editIcon.style.transition = 'color 0.3s ease';
        editIcon.style.marginRight = '10px'; // Add spacing between icons

        editIcon.addEventListener('mouseover', () => { editIcon.style.color = '#007BFF'; });
        editIcon.addEventListener('mouseout', () => { editIcon.style.color = '#666666'; });

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.transition = 'color 0.3s ease';

        deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#FF0000'; });
        deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#666666'; });


        // Append icons to the wrapper
        iconWrapper.appendChild(editIcon);
        iconWrapper.appendChild(deleteIcon);

        // Append label, input, and icons
        fileUploadWrapper.appendChild(label);
        fileUploadWrapper.appendChild(iconWrapper);

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileUploadWrapper.appendChild(fileInput);

        // Append to the form area
        formArea.appendChild(fileUploadWrapper);

        // Edit icon functionality
        editIcon.addEventListener('click', () => {
            const currentLabelText = label.textContent;
            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.value = currentLabelText;
            labelInput.style.width = '100%';
            labelInput.style.padding = '8px';
            labelInput.style.border = '1px solid #ccc';
            labelInput.style.borderRadius = '5px';

            label.textContent = '';
            label.appendChild(labelInput);
            labelInput.focus();

            labelInput.addEventListener('blur', () => {
                label.textContent = labelInput.value.trim() || currentLabelText;
                labelInput.remove();
            });
        });

        // Delete icon functionality
        deleteIcon.addEventListener('click', () => {
            fileUploadWrapper.remove();
        });
    });

    // Cancel button event
    document.getElementById('cancel-file-upload').addEventListener('click', () => {
        modalWrapper.remove();
        backdrop.remove();
    });
}










//                                                   FULL NAME FIELDS 
else if (type === 'name-fields') {
    const nameWrapper = document.createElement('div');
    nameWrapper.style.display = 'flex';
    nameWrapper.style.alignItems = 'center'; // Align inputs and icons vertically center
    nameWrapper.style.gap = '10px';
    nameWrapper.style.backgroundColor = '#f9f9f9'; // Light background color
    nameWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Subtle shadow
    nameWrapper.style.borderRadius = '10px'; // Rounded corners
    nameWrapper.style.padding = '15px'; // Padding for a clean layout
    nameWrapper.style.marginBottom = '20px';

    // Wrapper for First Name Field
    const firstNameWrapper = document.createElement('div');
    firstNameWrapper.style.display = 'flex';
    firstNameWrapper.style.flexDirection = 'column'; // Stack label and input vertically
    firstNameWrapper.style.flex = '1';

    const firstNameLabel = document.createElement('label');
    firstNameLabel.textContent = 'First Name';
    firstNameLabel.style.fontWeight = 'bold';

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.placeholder = 'Enter First Name'; // Use placeholder
    firstName.style.padding = '8px';
    firstName.style.border = '1px solid #ccc';
    firstName.style.borderRadius = '5px';

    firstNameWrapper.appendChild(firstNameLabel);
    firstNameWrapper.appendChild(firstName);

    // Wrapper for Last Name Field
    const lastNameWrapper = document.createElement('div');
    lastNameWrapper.style.display = 'flex';
    lastNameWrapper.style.flexDirection = 'column'; // Stack label and input vertically
    lastNameWrapper.style.flex = '1';

    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Last Name';
    lastNameLabel.style.fontWeight = 'bold';

    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.placeholder = 'Enter Last Name'; // Use placeholder
    lastName.style.padding = '8px';
    lastName.style.border = '1px solid #ccc';
    lastName.style.borderRadius = '5px';

    lastNameWrapper.appendChild(lastNameLabel);
    lastNameWrapper.appendChild(lastName);

    // Icon Wrapper for Edit and Delete
    const iconWrapper = document.createElement('div');
    iconWrapper.style.display = 'flex';
    iconWrapper.style.gap = '10px';
    iconWrapper.style.marginLeft = 'auto'; // Align icons to the far right

    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666';
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit';
    editIcon.style.transition = 'color 0.3s ease';

    editIcon.addEventListener('mouseover', () => { editIcon.style.color = '#007BFF'; });
    editIcon.addEventListener('mouseout', () => { editIcon.style.color = '#666666'; });

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666';
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete';
    deleteIcon.style.transition = 'color 0.3s ease';

    deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#FF0000'; });
    deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#666666'; });

    deleteIcon.addEventListener('click', () => {
        nameWrapper.remove();
    });

    editIcon.addEventListener('click', () => {
        const firstLabelText = firstNameLabel.textContent;
        const lastLabelText = lastNameLabel.textContent;

        const firstLabelInput = document.createElement('input');
        firstLabelInput.type = 'text';
        firstLabelInput.value = firstLabelText;
        firstLabelInput.style.padding = '8px';
        firstLabelInput.style.border = '1px solid #ccc';
        firstLabelInput.style.borderRadius = '5px';

        const lastLabelInput = document.createElement('input');
        lastLabelInput.type = 'text';
        lastLabelInput.value = lastLabelText;
        lastLabelInput.style.padding = '8px';
        lastLabelInput.style.border = '1px solid #ccc';
        lastLabelInput.style.borderRadius = '5px';

        firstNameLabel.textContent = '';
        lastNameLabel.textContent = '';
        firstNameLabel.appendChild(firstLabelInput);
        lastNameLabel.appendChild(lastLabelInput);
        firstLabelInput.focus();

        firstLabelInput.addEventListener('blur', () => {
            firstNameLabel.textContent = firstLabelInput.value || firstLabelText;
            firstLabelInput.remove();
        });

        lastLabelInput.addEventListener('blur', () => {
            lastNameLabel.textContent = lastLabelInput.value || lastLabelText;
            lastLabelInput.remove();
        });
    });

    iconWrapper.appendChild(editIcon);
    iconWrapper.appendChild(deleteIcon);

    // Append the field wrappers and icon wrapper to the main wrapper
    nameWrapper.appendChild(firstNameWrapper);
    nameWrapper.appendChild(lastNameWrapper);
    nameWrapper.appendChild(iconWrapper);

    formArea.appendChild(nameWrapper);
}









  






  //                                               FULL CONTACT INFORMATION
  else if (type === 'contact-information') {
    const contactWrapper = document.createElement('div');
    contactWrapper.style.display = 'grid';
    contactWrapper.style.gridTemplateColumns = '1fr 1fr'; // Dual-lane layout
    contactWrapper.style.gap = '10px';
    contactWrapper.style.backgroundColor = '#f9f9f9'; // Light background
    contactWrapper.style.padding = '15px';
    contactWrapper.style.borderRadius = '10px';
    contactWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    contactWrapper.style.position = 'relative'; // For positioning the icons
    contactWrapper.style.marginBottom = '20px';

    // Fields array for contact information with labels
    const fields = [
        { label: 'First Name', type: 'text' },
        { label: 'Last Name', type: 'text' },
        { label: 'Address Line 1', type: 'text' },
        { label: 'Address Line 2', type: 'text' },
        { label: 'Company Name', type: 'text' },
        { label: 'Country', type: 'text' },
        { label: 'State', type: 'text' },
        { label: 'City', type: 'text' },
        { label: 'Zip Code', type: 'text' },
        { label: 'Phone', type: 'tel' },
        { label: 'Email', type: 'email' },
    ];

    // Create and append fields with labels and inputs
    fields.forEach(field => {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.style.display = 'flex';
        fieldWrapper.style.flexDirection = 'column'; // Stack label and input vertically

        const label = document.createElement('label');
        label.textContent = field.label;
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '5px'; // Space between label and input field

        const input = document.createElement('input');
        input.type = field.type;
        input.style.padding = '8px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';

        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);
        contactWrapper.appendChild(fieldWrapper);
    });

    // Icon Wrapper for Delete
    const iconWrapper = document.createElement('div');
    iconWrapper.style.display = 'flex';
    iconWrapper.style.gap = '10px';
    iconWrapper.style.position = 'absolute';
    iconWrapper.style.top = '15px';
    iconWrapper.style.right = '15px';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666';
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete';
    deleteIcon.style.transition = 'color 0.3s ease';

    deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#FF0000'; });
    deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#666666'; });

    // Add delete functionality
    deleteIcon.addEventListener('click', () => {
        contactWrapper.remove();
    });

    iconWrapper.appendChild(deleteIcon);
    contactWrapper.appendChild(iconWrapper);

    formArea.appendChild(contactWrapper);
}












//                                                    MULTIPLE TEXTBOXES
else if (type === 'multiple-textboxes') {
    // Create the modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px 40px 20px 20px'; // Increased right padding
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.style.borderRadius = '8px';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter one Question per Line';
    modal.appendChild(modalTitle);

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter one Question per line';
    textarea.style.width = '90%'; // Reduced width for additional padding
    textarea.style.height = '100px';
    textarea.style.marginBottom = '10px';
    modal.appendChild(textarea);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.display = 'flex';
    buttonWrapper.style.justifyContent = 'flex-end';
    buttonWrapper.style.gap = '10px'; // Space between buttons
    buttonWrapper.style.marginTop = '10px';

    const addButton = document.createElement('button');
    addButton.textContent = 'Save';
    addButton.style.flex = '1';
    addButton.style.padding = '10px';
    addButton.style.backgroundColor = 'black';
    addButton.style.color = '#fff';
    addButton.style.fontWeight = 'bold';
    addButton.style.border = '1px solid #ddd';
    addButton.style.borderRadius = '4px';
    addButton.style.cursor = 'pointer';
    addButton.style.transition = 'background-color 0.3s ease';
    addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = '#007BFF';
    });
    addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'black';
    });
    buttonWrapper.appendChild(addButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.flex = '1'; // Buttons will equally share space
    cancelButton.style.padding = '10px';
    cancelButton.style.backgroundColor = '#007BFF'; 
    cancelButton.style.color = '#fff';
    cancelButton.style.fontWeight = 'bold';
    cancelButton.style.border = '1px solid #ddd'; // Subtle border
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.transition = 'background-color 0.3s ease';
    cancelButton.addEventListener('mouseover', () => {
        cancelButton.style.backgroundColor = '#FF0000';
    });
    cancelButton.addEventListener('mouseout', () => {
        cancelButton.style.backgroundColor = 'black';
    });
    buttonWrapper.appendChild(cancelButton);

    modal.appendChild(buttonWrapper);
    document.body.appendChild(modal);

    // Handle adding labels and textboxes
    addButton.addEventListener('click', () => {
        const lines = textarea.value.split('\n').filter(line => line.trim() !== '');
        const elementWrapper = document.createElement('div');
        elementWrapper.style.display = 'flex';
        elementWrapper.style.flexDirection = 'column';
        elementWrapper.style.backgroundColor = '#f9f9f9';
        elementWrapper.style.padding = '15px';
        elementWrapper.style.borderRadius = '8px';
        elementWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        elementWrapper.style.marginBottom = '20px';
        elementWrapper.style.position = 'relative'; // For positioning icons

        const contentWrapper = document.createElement('div');
        contentWrapper.style.display = 'flex';
        contentWrapper.style.flexDirection = 'column';
        contentWrapper.style.gap = '10px';

        lines.forEach((line) => {
            const fieldWrapper = document.createElement('div');
            fieldWrapper.style.display = 'flex';
            fieldWrapper.style.flexDirection = 'column';

            const label = document.createElement('label');
            label.textContent = line;
            label.style.fontWeight = 'bold';
            label.style.marginBottom = '5px';

            const textbox = document.createElement('input');
            textbox.type = 'text';
            textbox.style.padding = '8px';
            textbox.style.border = '1px solid #ccc';
            textbox.style.borderRadius = '5px';

            fieldWrapper.appendChild(label);
            fieldWrapper.appendChild(textbox);
            contentWrapper.appendChild(fieldWrapper);
        });

        // Icon Wrapper (Delete Only)
        const iconWrapper = document.createElement('div');
        iconWrapper.style.position = 'absolute';
        iconWrapper.style.top = '15px';
        iconWrapper.style.right = '15px';

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.transition = 'color 0.3s ease';

        deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#FF0000'; });
        deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#666666'; });

        // Add delete functionality
        deleteIcon.addEventListener('click', () => {
            elementWrapper.remove();
        });

        iconWrapper.appendChild(deleteIcon);

        elementWrapper.appendChild(contentWrapper);
        elementWrapper.appendChild(iconWrapper);

        formArea.appendChild(elementWrapper);
        modal.remove();
    });

    // Handle cancel button
    cancelButton.addEventListener('click', () => {
        modal.remove();
    });
}







  



  //                                                           NPS
  else if (type === 'nps') {
    const npsWrapper = document.createElement('div');
    npsWrapper.style.display = 'flex';
    npsWrapper.style.flexDirection = 'column';
    npsWrapper.style.gap = '10px';
    npsWrapper.style.marginTop = '20px';
    npsWrapper.style.backgroundColor = '#f9f9f9';
    npsWrapper.style.padding = '15px';
    npsWrapper.style.borderRadius = '8px';
    npsWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    npsWrapper.style.position = 'relative';

    const labelWrapper = document.createElement('div');
    labelWrapper.style.display = 'flex';
    labelWrapper.style.justifyContent = 'space-between';
    labelWrapper.style.alignItems = 'center';

    // Create question label
    const questionLabel = document.createElement('label');
    questionLabel.textContent = 'Rate Us';
    questionLabel.style.fontWeight = 'bold';

    // Icon Wrapper
    const iconWrapper = document.createElement('div');
    iconWrapper.style.display = 'flex';
    iconWrapper.style.gap = '10px';

    // Add edit icon (replaced)
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666';
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit';
    editIcon.style.transition = 'color 0.3s ease';

    editIcon.addEventListener('mouseover', () => { editIcon.style.color = '#007BFF'; });
    editIcon.addEventListener('mouseout', () => { editIcon.style.color = '#666666'; });

    editIcon.addEventListener('click', () => {
        const currentText = questionLabel.textContent;
        questionLabel.textContent = '';
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;

        editInput.addEventListener('blur', () => {
            questionLabel.textContent = editInput.value;
            editInput.remove();
        });

        editInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                questionLabel.textContent = editInput.value;
                editInput.remove();
            }
        });

        questionLabel.appendChild(editInput);
        editInput.focus();
    });

    // Add delete icon (replaced)
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666';
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete';
    deleteIcon.style.transition = 'color 0.3s ease';

    deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#FF0000'; });
    deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#666666'; });

    deleteIcon.addEventListener('click', () => {
        npsWrapper.remove();
    });

    iconWrapper.appendChild(editIcon);
    iconWrapper.appendChild(deleteIcon);

    labelWrapper.appendChild(questionLabel);
    labelWrapper.appendChild(iconWrapper);

    npsWrapper.appendChild(labelWrapper);

    // Add smiley options
    const smileyOptions = document.createElement('div');
    smileyOptions.style.display = 'flex';
    smileyOptions.style.justifyContent = 'space-between';
    smileyOptions.style.marginTop = '10px';

    const emojis = ['😡', '😟', '😅', '😐', '😊', '😃', '😂', '😎', '🤩', '😍'];
    emojis.forEach((emoji) => {
        const emojiWrapper = document.createElement('span');
        emojiWrapper.textContent = emoji;
        emojiWrapper.style.fontSize = '32px'; // Larger emojis
        emojiWrapper.style.cursor = 'pointer';
        emojiWrapper.style.transition = 'transform 0.1s';

        emojiWrapper.addEventListener('click', () => {
            // Reset all emoji sizes
            Array.from(smileyOptions.children).forEach(child => {
                child.style.transform = 'scale(1)';
            });

            // Highlight the selected emoji
            emojiWrapper.style.transform = 'scale(1.3)';
        });

        smileyOptions.appendChild(emojiWrapper);
    });

    npsWrapper.appendChild(smileyOptions);

    formArea.appendChild(npsWrapper);
}








  //                                                          SLIDER
  else if (type === 'slider') {
    // Create the modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';  // Updated shadow for depth
    modal.style.borderRadius = '12px'; // Rounded corners
    modal.style.width = '350px';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Slider Label';
    modalTitle.style.marginBottom = '10px';
    modal.appendChild(modalTitle);

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Enter your Question here';
    inputField.style.width = '90%';
    inputField.style.marginBottom = '10px';
    inputField.style.padding = '8px';
    inputField.style.border = '1px solid #ccc';
    inputField.style.borderRadius = '5px';
    modal.appendChild(inputField);

    // Button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '10px';

    const addButton = document.createElement('button');
    addButton.textContent = 'Save';
    addButton.style.flex = '1';
    addButton.style.backgroundColor = 'black';
    addButton.style.color = '#fff';
    addButton.style.border = '1px solid #ccc';
    addButton.style.padding = '8px 10px';
    addButton.style.borderRadius = '5px';
    addButton.style.cursor = 'pointer';
    addButton.style.transition = 'background-color 0.3s ease';

    addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = '#007BFF';
    });

    addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'black';
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.flex = '1';
    cancelButton.style.padding = '8px 10px';
    cancelButton.style.backgroundColor = 'black';
    cancelButton.style.color = '#fff';
    cancelButton.style.fontWeight = 'bold';
    cancelButton.style.border = '1px solid #ddd';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.transition = 'background-color 0.3s ease';

    cancelButton.addEventListener('mouseover', () => {
        cancelButton.style.backgroundColor = '#FF0000';
    });

    cancelButton.addEventListener('mouseout', () => {
        cancelButton.style.backgroundColor = 'black';
    });

    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);
    modal.appendChild(buttonContainer);

    document.body.appendChild(modal);

    // Add button click event
    addButton.addEventListener('click', () => {
        const labelText = inputField.value.trim();
        if (!labelText) return alert('Please enter a label.');

        const sliderWrapper = document.createElement('div');
        sliderWrapper.style.display = 'flex';
        sliderWrapper.style.padding = '10px';
        sliderWrapper.style.flexDirection = 'column';
        sliderWrapper.style.gap = '10px';
        sliderWrapper.style.marginTop = '10px';
        sliderWrapper.style.backgroundColor = '#f9f9f9';
        sliderWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';  // Shadow for the slider wrapper
        sliderWrapper.style.borderRadius = '10px'; // Rounded corners

        const labelWrapper = document.createElement('div');
        labelWrapper.style.display = 'flex';
        labelWrapper.style.justifyContent = 'space-between';
        labelWrapper.style.alignItems = 'center';

        const sliderLabel = document.createElement('label');
        sliderLabel.textContent = labelText;
        sliderLabel.style.fontWeight = 'bold';

        // Add edit icon (replaced)
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666';
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit Question';
        editIcon.style.transition = 'color 0.3s ease';

        editIcon.addEventListener('mouseover', () => { editIcon.style.color = '#007BFF'; });
        editIcon.addEventListener('mouseout', () => { editIcon.style.color = '#666666'; });

        editIcon.addEventListener('click', () => {
            const currentText = sliderLabel.textContent;
            sliderLabel.textContent = '';
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = currentText;

            editInput.addEventListener('blur', () => {
                sliderLabel.textContent = editInput.value;
                editInput.remove();
            });

            editInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    sliderLabel.textContent = editInput.value;
                    editInput.remove();
                }
            });

            sliderLabel.appendChild(editInput);
            editInput.focus();
        });

        // Add delete icon (replaced)
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete this Slider';
        deleteIcon.style.transition = 'color 0.3s ease';

        deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#FF0000'; });
        deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#666666'; });

        deleteIcon.addEventListener('click', () => {
            sliderWrapper.remove();
        });

        const iconWrapper = document.createElement('div');
        iconWrapper.style.display = 'flex';
        iconWrapper.style.gap = '10px';
        iconWrapper.appendChild(editIcon);
        iconWrapper.appendChild(deleteIcon);

        labelWrapper.appendChild(sliderLabel);
        labelWrapper.appendChild(iconWrapper);
        sliderWrapper.appendChild(labelWrapper);

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '100';
        slider.value = '50';
        slider.style.width = '98%';
        slider.style.appearance = 'none';
        slider.style.background = 'linear-gradient(to right, #3b82f6, #ddd)';
        slider.style.height = '8px';
        slider.style.borderRadius = '5px';
        slider.style.outline = 'none';
        slider.style.cursor = 'pointer';
        slider.style.webkitAppearance = 'none';
        slider.style.mozAppearance = 'none';

        slider.addEventListener('input', () => {
            const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.background = `linear-gradient(to right, #3b82f6 ${percentage}%, #ddd ${percentage}%)`;
        });

        sliderWrapper.appendChild(slider);
        formArea.appendChild(sliderWrapper);
        modal.remove();
    });

    cancelButton.addEventListener('click', () => {
        modal.remove();
    });
}













  //                                                       IMAGE SELECTOR

  else if (type === 'image-selector') {
    // Modal 1: Primary label and number of options
    const modal1 = document.createElement('div');
    modal1.style.position = 'fixed';
    modal1.style.top = '50%';
    modal1.style.left = '50%';
    modal1.style.transform = 'translate(-50%, -50%)';
    modal1.style.zIndex = '1000';
    modal1.style.backgroundColor = '#f9f9f9';
    modal1.style.padding = '20px 30px 20px 20px';
    modal1.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal1.style.borderRadius = '8px';

    const modalTitle1 = document.createElement('h3');
    modalTitle1.textContent = 'Enter Question and Number of Options';
    modal1.appendChild(modalTitle1);

    const primaryLabelInput = document.createElement('input');
    primaryLabelInput.type = 'text';
    primaryLabelInput.placeholder = 'Enter Question';
    modal1.appendChild(primaryLabelInput);

    const numOptionsInput = document.createElement('input');
    numOptionsInput.type = 'number';
    numOptionsInput.placeholder = 'Number of options';
    modal1.appendChild(numOptionsInput);

    const nextButton1 = document.createElement('button');
    nextButton1.textContent = 'Next';
    nextButton1.style.padding = '10px';
    nextButton1.style.backgroundColor = 'black';
    nextButton1.style.color = '#fff';
    nextButton1.style.fontWeight = 'bold';
    nextButton1.style.border = '1px solid #ddd';
    nextButton1.style.borderRadius = '4px';
    nextButton1.style.cursor = 'pointer';
    nextButton1.style.transition = 'background-color 0.3s ease';
    nextButton1.addEventListener('mouseover',()=>{
        nextButton1.style.backgroundColor = '#007BFF';
    });
    nextButton1.addEventListener('mouseout',()=>{
        nextButton1.style.backgroundColor = 'black';
    });
    modal1.appendChild(nextButton1);

    document.body.appendChild(modal1);

    nextButton1.addEventListener('click', () => {
        const primaryLabel = primaryLabelInput.value.trim();
        const numOptions = parseInt(numOptionsInput.value);

        if (!primaryLabel || isNaN(numOptions) || numOptions < 1) {
            alert('Please provide a valid label and number of options');
            return;
        }

        modal1.remove();

        const modal2 = document.createElement('div');
        modal2.style.position = 'fixed';
        modal2.style.top = '50%';
        modal2.style.left = '50%';
        modal2.style.transform = 'translate(-50%, -50%)';
        modal2.style.zIndex = '1000';
        modal2.style.backgroundColor = '#f9f9f9';
        modal2.style.padding = '20px 30px 20px 20px';
        modal2.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        modal2.style.borderRadius = '8px';

        const modalTitle2 = document.createElement('h3');
        modalTitle2.textContent = 'Enter Option Descriptions and Image URLs';
        modal2.appendChild(modalTitle2);

        const optionsWrapper = document.createElement('div');
        optionsWrapper.style.display = 'flex';
        optionsWrapper.style.flexDirection = 'column';
        optionsWrapper.style.gap = '10px';

        for (let i = 0; i < numOptions; i++) {
            const optionWrapper = document.createElement('div');
            optionWrapper.style.display = 'flex';
            optionWrapper.style.alignItems = 'center'; // Align inputs vertically
            optionWrapper.style.justifyContent = 'space-between'; // Distribute inputs evenly
            optionWrapper.style.gap = '10px'; // Add spacing between inputs
            optionWrapper.style.padding = '10px';
            optionWrapper.style.backgroundColor = '#f9f9f9';
            optionWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            optionWrapper.style.borderRadius = '4px';

            const labelInput = document.createElement('input');
            labelInput.type = 'text';
            labelInput.placeholder = `Label for Option ${i + 1}`;
            labelInput.style.flex = '1'; // Allow the input to expand evenly
            optionWrapper.appendChild(labelInput);

            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.flex = '1'; // Ensure uniform width
            optionWrapper.appendChild(fileInput);

            const urlInput = document.createElement('input');
            urlInput.type = 'url';
            urlInput.placeholder = 'Image URL for Option';
            urlInput.style.flex = '1'; // Ensure uniform width
            optionWrapper.appendChild(urlInput);

            optionsWrapper.appendChild(optionWrapper);
        }

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Save';
        submitButton.style.marginTop = '20px';
        submitButton.style.padding = '10px 20px';
        submitButton.style.border = 'none';
        submitButton.style.borderRadius = '4px';
        submitButton.style.backgroundColor = 'black';
        submitButton.style.color = '#fff';
        submitButton.style.fontWeight = 'bold';
        submitButton.style.cursor = 'pointer';
        submitButton.style.transition = 'background-color 0.3s ease',
        submitButton.addEventListener('mouseover', () => {
            submitButton.style.backgroundColor = '#007BFF';
        });
        submitButton.addEventListener('mouseout', () => {
            submitButton.style.backgroundColor = 'black';
        });

        modal2.appendChild(optionsWrapper);
        modal2.appendChild(submitButton);
        document.body.appendChild(modal2);

        submitButton.addEventListener('click', () => {
            const optionLabels = [];
            const imageFiles = [];
            const imageUrls = [];

            const inputs = optionsWrapper.querySelectorAll('div');
            inputs.forEach((inputWrapper) => {
                const labelInput = inputWrapper.querySelector('input[type="text"]');
                const fileInput = inputWrapper.querySelector('input[type="file"]');
                const urlInput = inputWrapper.querySelector('input[type="url"]');

                if (labelInput && (fileInput.files.length > 0 || urlInput.value)) {
                    optionLabels.push(labelInput.value);
                    if (fileInput.files.length > 0) {
                        imageFiles.push(fileInput.files[0]);
                    } else {
                        imageUrls.push(urlInput.value);
                    }
                }
            });

            if (optionLabels.length !== numOptions) {
                alert('Please provide labels and images for all options.');
                return;
            }

            modal2.remove();

            const imageSelectorWrapper = document.createElement('div');
            imageSelectorWrapper.style.display = 'flex';
            imageSelectorWrapper.style.flexDirection = 'column';
            imageSelectorWrapper.style.gap = '20px';
            imageSelectorWrapper.style.padding = '20px';
            imageSelectorWrapper.style.backgroundColor = '#f9f9f9';
            imageSelectorWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            imageSelectorWrapper.style.borderRadius = '8px';

            // Primary label with delete icon
            const primaryLabelWrapper = document.createElement('div');
            primaryLabelWrapper.style.display = 'flex';
            primaryLabelWrapper.style.justifyContent = 'space-between';
            primaryLabelWrapper.style.alignItems = 'center';

            const primaryLabelEl = document.createElement('h4');
            primaryLabelEl.textContent = primaryLabel;

            const deleteIcon = document.createElement('i');
            deleteIcon.className = 'fa-regular fa-trash-can';
            deleteIcon.style.fontSize = '20px';
            deleteIcon.style.color = '#666666'; 
            deleteIcon.style.cursor = 'pointer';
            deleteIcon.title = 'Delete Image Selector';
            deleteIcon.style.transition = 'color 0.3s ease'; // Transition for color property
            deleteIcon.addEventListener('click', () => {
                imageSelectorWrapper.remove();
            });
            deleteIcon.addEventListener('mouseover', () => {
                deleteIcon.style.color = '#FF0000'; // Red color on hover
            });
            deleteIcon.addEventListener('mouseout', () => {
                deleteIcon.style.color = '#666666'; // Original color
            });

            primaryLabelWrapper.appendChild(primaryLabelEl);
            primaryLabelWrapper.appendChild(deleteIcon);
            imageSelectorWrapper.appendChild(primaryLabelWrapper);

            // Options
            const optionsContainer = document.createElement('div');
            optionsContainer.style.display = 'flex';
            optionsContainer.style.flexWrap = 'wrap';
            optionsContainer.style.gap = '20px';
            optionsContainer.style.justifyContent = 'space-evenly'; // Space images evenly

            optionLabels.forEach((label, index) => {
                const optionWrapper = document.createElement('div');
                optionWrapper.style.display = 'flex';
                optionWrapper.style.flexDirection = 'column';
                optionWrapper.style.alignItems = 'center';

                const img = document.createElement('img');
                img.alt = label;
                img.style.width = '80px';
                img.style.height = '80px';
                img.style.objectFit = 'cover';
                img.style.cursor = 'pointer';
                img.style.transition = 'transform 0.3s ease'; // Smooth enlargement

                if (imageFiles[index]) {
                    const reader = new FileReader();
                    reader.onload = () => (img.src = reader.result);
                    reader.readAsDataURL(imageFiles[index]);
                } else {
                    img.src = imageUrls[index];
                }

                // Enlarge selected image and reset others
                img.addEventListener('click', () => {
                    const currentlyEnlarged = optionsContainer.querySelector('img[style*="transform: scale(1.2)"]');
                    if (currentlyEnlarged) {
                        currentlyEnlarged.style.transform = 'scale(1)'; // Reset previous enlarged image
                    }
                    img.style.transform = 'scale(1.2)'; // Enlarge the selected image
                });

                const labelEl = document.createElement('span');
                labelEl.textContent = label;

                optionWrapper.appendChild(img);
                optionWrapper.appendChild(labelEl);
                optionsContainer.appendChild(optionWrapper);
            });

            imageSelectorWrapper.appendChild(optionsContainer);
            formArea.appendChild(imageSelectorWrapper);
        });
    });
}


















  //                                                          RATING SCALE
  else if (type === 'rating-scale') {
    const ratingWrapper = document.createElement('div');
    ratingWrapper.style.margin = '10px 0';
    ratingWrapper.style.padding = '10px';
    ratingWrapper.style.backgroundColor = '#f9f9f9';
    ratingWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    ratingWrapper.style.borderRadius = '8px';
    ratingWrapper.style.display = 'flex';
    ratingWrapper.style.flexDirection = 'column';
    ratingWrapper.style.gap = '10px';

    // Create the label for the rating scale with edit and delete icons
    const ratingLabelWrapper = document.createElement('div');
    ratingLabelWrapper.style.display = 'flex';
    ratingLabelWrapper.style.alignItems = 'center';
    ratingLabelWrapper.style.justifyContent = 'space-between';

    const labelAndIcons = document.createElement('div');
    labelAndIcons.style.display = 'flex';
    labelAndIcons.style.alignItems = 'center';
    labelAndIcons.style.justifyContent = 'space-between';
    labelAndIcons.style.width = '100%';

    const ratingLabel = document.createElement('label');
    ratingLabel.textContent = 'Rate us: ';
    ratingLabel.style.fontWeight = 'bold';
    ratingLabel.style.flexGrow = '1';

    const iconGroup = document.createElement('div');
    iconGroup.style.display = 'flex';
    iconGroup.style.alignItems = 'center';
    iconGroup.style.gap = '10px';

    // Edit Icon
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666'; // Slightly dark color
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit Question'; // Tooltip text
    editIcon.style.transition = 'color 0.3s ease'; // Transition for color property

    editIcon.addEventListener('mouseover', () => {
        editIcon.style.color = '#007BFF'; // Darker color on hover
    });
    editIcon.addEventListener('mouseout', () => {
        editIcon.style.color = '#666666'; // Original color
    });

    editIcon.addEventListener('click', () => {
        const currentText = ratingLabel.textContent.trim();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.style.width = '100%';
        ratingLabel.textContent = '';
        ratingLabel.appendChild(input);
        input.focus();

        input.addEventListener('blur', () => {
            const newText = input.value.trim();
            ratingLabel.textContent = newText || 'Rate us: ';
        });
    });

    // Delete Icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666'; // Slightly dark color
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete this Rating'; // Tooltip text
    deleteIcon.style.transition = 'color 0.3s ease'; // Transition for color property

    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Red color on hover
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Original color
    });

    deleteIcon.addEventListener('click', () => {
        ratingWrapper.remove(); // Instantly removes the rating scale
    });

    iconGroup.appendChild(editIcon);
    iconGroup.appendChild(deleteIcon);

    labelAndIcons.appendChild(ratingLabel);
    labelAndIcons.appendChild(iconGroup);

    ratingLabelWrapper.appendChild(labelAndIcons);

    const ratingGroup = document.createElement('div');
    ratingGroup.style.display = 'flex';
    ratingGroup.style.justifyContent = 'space-evenly'; // Space emojis evenly
    ratingGroup.style.alignItems = 'center';
    ratingGroup.style.gap = '20px'; // Consistent gap

    // Emojis for rating (1 to 5 stars)
    const emojis = ['😡', '😟', '😐', '😊', '😍'];

    emojis.forEach((emoji, i) => {
        const emojiWrapper = document.createElement('label');
        emojiWrapper.style.cursor = 'pointer';
        emojiWrapper.style.fontSize = '40px'; // Increased font size
        emojiWrapper.style.transition = 'transform 0.3s'; // Smooth transition for enlargement

        const emojiInput = document.createElement('input');
        emojiInput.type = 'radio';
        emojiInput.name = 'rating';
        emojiInput.value = i + 1;
        emojiInput.style.display = 'none'; // Hide the radio button

        emojiWrapper.appendChild(emojiInput);
        emojiWrapper.appendChild(document.createTextNode(emoji));

        // When selected, enlarge the emoji slightly
        emojiWrapper.addEventListener('click', () => {
            emojiWrapper.style.transform = 'scale(1.2)'; // Enlarge emoji
            const otherEmojis = ratingGroup.querySelectorAll('label');
            otherEmojis.forEach((otherEmoji) => {
                if (otherEmoji !== emojiWrapper) {
                    otherEmoji.style.transform = 'scale(1)'; // Reset size for others
                }
            });
        });

        ratingGroup.appendChild(emojiWrapper);
    });

    ratingWrapper.appendChild(ratingLabelWrapper);
    ratingWrapper.appendChild(ratingGroup);
    formArea.appendChild(ratingWrapper);
}









  //                                                          STAR RATING
  else if (type === 'star-rating') {
    const starWrapper = document.createElement('div');
    starWrapper.style.margin = '10px 0';
    starWrapper.style.padding = '10px';
    starWrapper.style.backgroundColor = '#f9f9f9';
    starWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    starWrapper.style.borderRadius = '8px';
    starWrapper.style.display = 'flex';
    starWrapper.style.flexDirection = 'column'; // Ensure vertical layout
    starWrapper.style.alignItems = 'flex-start';
    starWrapper.style.position = 'relative'; // For positioning icons

    const starLabelWrapper = document.createElement('div');
    starLabelWrapper.style.display = 'flex';
    starLabelWrapper.style.justifyContent = 'space-between';
    starLabelWrapper.style.width = '100%';
    starLabelWrapper.style.alignItems = 'center';

    const starLabel = document.createElement('label');
    starLabel.textContent = 'Rate us:';
    starLabel.style.fontWeight = 'bold';

    const iconGroup = document.createElement('div');
    iconGroup.style.display = 'flex';
    iconGroup.style.gap = '10px';

    // Edit Icon
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // Font Awesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666'; // Slightly dark color
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit heading text'; // Tooltip text
    editIcon.style.transition = 'color 0.3s ease'; // Transition for color property

    editIcon.addEventListener('mouseover', () => {
        editIcon.style.color = '#007BFF'; // Darker color on hover
    });
    editIcon.addEventListener('mouseout', () => {
        editIcon.style.color = '#666666'; // Original color
    });

    // Edit functionality: Replace label with input field
    editIcon.addEventListener('click', () => {
        const currentText = starLabel.textContent.trim();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.style.width = '100%';
        starLabel.textContent = ''; // Clear the label text
        starLabel.appendChild(input);
        input.focus();

        // Save the new text when the input loses focus
        input.addEventListener('blur', () => {
            const newText = input.value.trim();
            starLabel.textContent = newText || 'Rate us:'; // Update the label text with new value or default
        });
    });

    // Delete Icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666'; // Slightly dark color
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete this Rating'; // Tooltip text
    deleteIcon.style.transition = 'color 0.3s ease'; // Transition for color property

    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Red color on hover
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Original color
    });

    deleteIcon.addEventListener('click', () => {
        starWrapper.remove(); // Instantly removes the star-rating component
    });

    iconGroup.appendChild(editIcon);
    iconGroup.appendChild(deleteIcon);

    starLabelWrapper.appendChild(starLabel);
    starLabelWrapper.appendChild(iconGroup);

    starWrapper.appendChild(starLabelWrapper);

    // Star Group
    const starGroup = document.createElement('div');
    starGroup.style.display = 'flex'; // Arrange stars horizontally
    starGroup.style.justifyContent = 'space-between'; // Evenly space stars
    starGroup.style.width = '80%'; // Take 80% of the width
    starGroup.style.margin = '10px auto 0 auto'; // Center align the stars
    starGroup.style.cursor = 'pointer';

    let selectedStarIndex = null;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.textContent = '★';
        star.style.fontSize = '50px'; // Larger stars
        star.style.color = '#ccc';
        star.style.cursor = 'pointer';

        star.addEventListener('mouseover', () => {
            if (selectedStarIndex === null) {
                highlightStars(i + 1);
            }
        });

        star.addEventListener('mouseout', () => {
            if (selectedStarIndex === null) {
                resetStars();
            }
        });

        star.addEventListener('click', () => {
            selectedStarIndex = i + 1;
            highlightStars(selectedStarIndex);
        });

        starGroup.appendChild(star);
    }

    function highlightStars(count) {
        Array.from(starGroup.children).forEach((star, index) => {
            star.style.color = index < count ? '#FFD700' : '#ccc';
        });
    }

    function resetStars() {
        Array.from(starGroup.children).forEach((star) => {
            star.style.color = '#ccc';
        });
    }

    starWrapper.appendChild(starGroup);
    formArea.appendChild(starWrapper);
}














  //                                                       MATRIX TEXT BOXES
  else if (type === 'matrix-text') {
    // Modal dialog for matrix setup
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';
    modal.style.width = '400px';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.zIndex = '999';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Labels for Rows and Columns';
    modalTitle.style.marginBottom = '10px';

    // Textarea for row labels
    const rowLabelsInput = document.createElement('textarea');
    rowLabelsInput.placeholder = 'Enter your Question, one per row';
    rowLabelsInput.style.width = '95%';
    rowLabelsInput.style.height = '100px';
    rowLabelsInput.style.marginBottom = '10px';
    rowLabelsInput.style.border = '1px solid #ccc';
    rowLabelsInput.style.borderRadius = '4px';

    // Textarea for column labels
    const columnLabelsInput = document.createElement('textarea');
    columnLabelsInput.placeholder = 'Enter text, one per column';
    columnLabelsInput.style.width = '95%';
    columnLabelsInput.style.height = '100px';
    columnLabelsInput.style.marginBottom = '10px';
    columnLabelsInput.style.border = '1px solid #ccc';
    columnLabelsInput.style.borderRadius = '4px';

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Generate Matrix';
    modalButton.style.padding = '8px 16px';
    modalButton.style.border = 'none';
    modalButton.style.backgroundColor = 'black';
    modalButton.style.color = '#fff';
    modalButton.style.fontWeight = 'bold';
    modalButton.style.borderRadius = '4px';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition = 'background-color 0.3s ease';
    modalButton.addEventListener('mouseover', () => {
        modalButton.style.backgroundColor = '#007BFF';
    });
    modalButton.addEventListener('mouseout', () => {
        modalButton.style.backgroundColor = 'black';
    });

    const closeModal = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    modalButton.addEventListener('click', () => {
        const rowLabels = rowLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);
        const columnLabels = columnLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);

        if (rowLabels.length === 0 || columnLabels.length === 0) {
            alert('Please enter labels for both rows and columns.');
            return;
        }

        closeModal();

        // Generate the matrix
        const matrixWrapper = document.createElement('div');
        matrixWrapper.style.margin = '20px 0';
        matrixWrapper.style.padding = '10px';
        matrixWrapper.style.backgroundColor = '#f9f9f9';
        matrixWrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        matrixWrapper.style.borderRadius = '8px';
        matrixWrapper.style.position = 'relative'; // For positioning the delete icon

        // Add column labels
        const columnHeader = document.createElement('div');
        columnHeader.style.display = 'grid';
        columnHeader.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
        columnHeader.style.gap = '10px';

        const emptyCell = document.createElement('div'); // Empty cell for alignment
        columnHeader.appendChild(emptyCell);

        columnLabels.forEach((colLabel) => {
            const colHeader = document.createElement('div');
            colHeader.textContent = colLabel;
            colHeader.style.fontWeight = 'bold';
            colHeader.style.textAlign = 'center';
            columnHeader.appendChild(colHeader);
        });

        matrixWrapper.appendChild(columnHeader);

        // Add rows with textboxes
        rowLabels.forEach((rowLabel) => {
            const row = document.createElement('div');
            row.style.display = 'grid';
            row.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`; // Aligns label and inputs
            row.style.gap = '10px';
            row.style.marginTop = '10px';

            const rowHeader = document.createElement('div');
            rowHeader.textContent = rowLabel;
            rowHeader.style.fontWeight = 'bold';
            rowHeader.style.textAlign = 'center';
            rowHeader.style.alignSelf = 'center'; // Center-align the row header vertically
            rowHeader.style.height = '40px'; // Set a fixed height to align with the input fields
            row.appendChild(rowHeader);

            columnLabels.forEach(() => {
                const input = document.createElement('input');
                input.type = 'text';
                input.style.flex = '1';
                input.style.padding = '8px';
                input.style.borderRadius = '5px';
                row.appendChild(input);
            });

            matrixWrapper.appendChild(row);
        });

        // Add delete icon to matrix wrapper (top-right)
        const matrixDeleteIcon = document.createElement('i');
        matrixDeleteIcon.className = 'fa-regular fa-trash-can'; // Font Awesome delete icon class
        matrixDeleteIcon.style.fontSize = '20px';
        matrixDeleteIcon.style.color = '#666666'; // Slightly dark color
        matrixDeleteIcon.style.cursor = 'pointer';
        matrixDeleteIcon.style.position = 'absolute';
        matrixDeleteIcon.style.top = '10px';
        matrixDeleteIcon.style.right = '10px';
        matrixDeleteIcon.title = 'Delete'; // Tooltip text
        matrixDeleteIcon.style.transition = 'color 0.3s ease'; // Transition for color property

        matrixDeleteIcon.addEventListener('mouseover', () => {
            matrixDeleteIcon.style.color = '#FF0000'; // Red color on hover
        });
        matrixDeleteIcon.addEventListener('mouseout', () => {
            matrixDeleteIcon.style.color = '#666666'; // Original color
        });

        matrixDeleteIcon.addEventListener('click', () => {
            matrixWrapper.remove(); // Instantly removes the matrix
        });

        matrixWrapper.appendChild(matrixDeleteIcon);
        formArea.appendChild(matrixWrapper);
    });

    modal.appendChild(modalTitle);
    modal.appendChild(rowLabelsInput);
    modal.appendChild(columnLabelsInput);
    modal.appendChild(modalButton);

    // Append modal and overlay to the body
    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    // Show modal when matrix-text is dropped
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}








  //                                                         MATRIX DROPDOWN
  else if (type === 'matrix-dropdown') {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.zIndex = '999';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Labels for Rows and Columns';
    modalTitle.style.marginBottom = '10px';

    const rowLabelsInput = document.createElement('textarea');
    rowLabelsInput.placeholder = 'Enter your Question, one line per row';
    rowLabelsInput.style.width = '95%';
    rowLabelsInput.style.height = '100px';
    rowLabelsInput.style.marginBottom = '10px';
    rowLabelsInput.style.border = '1px solid #ccc';
    rowLabelsInput.style.borderRadius = '4px';

    const columnLabelsInput = document.createElement('textarea');
    columnLabelsInput.placeholder = 'Enter text, one line per column';
    columnLabelsInput.style.width = '95%';
    columnLabelsInput.style.height = '100px';
    columnLabelsInput.style.marginBottom = '10px';
    columnLabelsInput.style.border = '1px solid #ccc';
    columnLabelsInput.style.borderRadius = '4px';

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Generate Matrix';
    modalButton.style.padding = '8px 16px';
    modalButton.style.border = 'none';
    modalButton.style.backgroundColor = 'black';
    modalButton.style.color = '#fff';
    modalButton.style.fontWeight = 'bold';
    modalButton.style.borderRadius = '4px';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition  = 'background-color 0.3s ease';
    modalButton.addEventListener('mouseover',()=>{
        modalButton.style.backgroundColor = '#007BFF';
    });
    modalButton.addEventListener('mouseout',()=>{
        modalButton.style.backgroundColor = 'black';
    });

    const closeModal = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    modalButton.addEventListener('click', () => {
        const rowLabels = rowLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);
        const columnLabels = columnLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);

        if (rowLabels.length === 0 || columnLabels.length === 0) {
            alert('Please enter labels for both rows and columns.');
            return;
        }

        closeModal();

        const matrixWrapper = document.createElement('div');
        matrixWrapper.style.margin = '20px 0';
        matrixWrapper.style.padding = '20px';
        matrixWrapper.style.backgroundColor = '#f9f9f9';
        matrixWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        matrixWrapper.style.borderRadius = '8px';
        matrixWrapper.style.position = 'relative'; // For positioning the delete icon

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // Use the delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666'; // Slightly dark color
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.position = 'absolute';
        deleteIcon.style.top = '10px';
        deleteIcon.style.right = '10px';
        deleteIcon.style.transition = 'color 0.3s ease'; // Add smooth transition for color change
        deleteIcon.title = 'Delete Matrix';

        // Hover effect for delete icon
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000'; // Red color on hover
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666'; // Original color
        });

        deleteIcon.addEventListener('click', () => {
            matrixWrapper.remove();
        });

        const columnHeader = document.createElement('div');
        columnHeader.style.display = 'grid';
        columnHeader.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
        columnHeader.style.gap = '10px';

        const emptyCell = document.createElement('div');
        columnHeader.appendChild(emptyCell);

        columnLabels.forEach((colLabel) => {
            const colHeader = document.createElement('div');
            colHeader.textContent = colLabel;
            colHeader.style.fontWeight = 'bold';
            colHeader.style.textAlign = 'center';
            columnHeader.appendChild(colHeader);
        });

        matrixWrapper.appendChild(deleteIcon);
        matrixWrapper.appendChild(columnHeader);

        const dropdownMatrix = [];
        rowLabels.forEach((rowLabel) => {
            const row = document.createElement('div');
            row.style.display = 'grid';
            row.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
            row.style.gap = '10px';
            row.style.marginTop = '10px';

            const rowHeader = document.createElement('div');
            rowHeader.textContent = rowLabel;
            rowHeader.style.fontWeight = 'bold';
            rowHeader.style.textAlign = 'center';
            row.appendChild(rowHeader);

            columnLabels.forEach(() => {
                const dropdownWrapper = document.createElement('div');
                dropdownWrapper.style.position = 'relative';
                dropdownWrapper.style.display = 'inline-block';

                const dropdown = document.createElement('select');
                dropdown.style.flex = '1';
                dropdown.style.padding = '5px';
                dropdown.style.border = '1px solid #ccc';
                dropdown.style.borderRadius = '4px';
                dropdown.style.width = '70%';

                const placeholderOption = document.createElement('option');
                placeholderOption.value = '';
                placeholderOption.disabled = true;
                placeholderOption.selected = true;
                dropdown.appendChild(placeholderOption);

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.style.marginLeft = '5px';
                editButton.style.padding = '3px 8px';
                editButton.style.border = 'none';
                editButton.style.backgroundColor = 'black ';
                editButton.style.color = '#fff';
                editButton.style.fontWeight = 'bold';
                editButton.style.borderRadius = '4px';
                editButton.style.cursor = 'pointer';
                editButton.style.transition = 'background-color 0.3s ease';
                
                editButton.addEventListener('mouseover',() => {
                    editButton.style.backgroundColor = '#007BFF';
                });
                editButton.addEventListener('mouseout',() => {
                    editButton.style.backgroundColor = 'black';
                });

                editButton.addEventListener('click', () => {
                    // Create a modal dialog for editing options
                    const valueModal = document.createElement('div');
                    valueModal.style.position = 'fixed';
                    valueModal.style.top = '50%';
                    valueModal.style.left = '50%';
                    valueModal.style.transform = 'translate(-50%, -50%)';
                    valueModal.style.backgroundColor = '#fff';
                    valueModal.style.padding = '20px';
                    valueModal.style.borderRadius = '10px';
                    valueModal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    valueModal.style.zIndex = '1001';

                    const valueModalTitle = document.createElement('h4');
                    valueModalTitle.textContent = 'Enter Options (one per line)';
                    valueModalTitle.style.marginBottom = '10px';

                    const textarea = document.createElement('textarea');
                    textarea.style.width = '95%';
                    textarea.style.height = '100px';
                    textarea.style.marginBottom = '10px';
                    textarea.style.border = '1px solid #ccc';
                    textarea.style.borderRadius = '4px';

                    const saveButton = document.createElement('button');
                    saveButton.textContent = 'Save';
                    saveButton.style.padding = '8px 16px';
                    saveButton.style.border = 'none';
                    saveButton.style.backgroundColor = 'black ';
                    saveButton.style.color = '#fff';
                    saveButton.style.fontWeight = 'bold';
                    saveButton.style.borderRadius = '4px';
                    saveButton.style.cursor = 'pointer';

                    saveButton.addEventListener('mouseover', () => {
                        saveButton.style.backgroundColor = '#007BFF';
                    });
                    saveButton.addEventListener('mouseout', () => {
                        saveButton.style.backgroundColor = 'black';
                    });

                    saveButton.addEventListener('click', () => {
                        const options = textarea.value.split('\n').map(opt => opt.trim()).filter(opt => opt);
                        if (options.length > 0) {
                            dropdown.innerHTML = ''; // Clear previous options
                            options.forEach(opt => {
                                const option = document.createElement('option');
                                option.textContent = opt;
                                option.value = opt;
                                dropdown.appendChild(option);
                            });
                            document.body.removeChild(valueModal);
                        } else {
                            alert('Please enter at least one option.');
                        }
                    });

                    valueModal.appendChild(valueModalTitle);
                    valueModal.appendChild(textarea);
                    valueModal.appendChild(saveButton);
                    document.body.appendChild(valueModal);
                });

                dropdownWrapper.appendChild(dropdown);
                dropdownWrapper.appendChild(editButton);
                row.appendChild(dropdownWrapper);
            });

            dropdownMatrix.push(row);
            matrixWrapper.appendChild(row);
        });

        formArea.appendChild(matrixWrapper);
    });

    modal.appendChild(modalTitle);
    modal.appendChild(rowLabelsInput);
    modal.appendChild(columnLabelsInput);
    modal.appendChild(modalButton);

    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}


















  //                                                           MATRIX RADIO
  else if (type === 'matrix-radio') {
    // Modal dialog for matrix setup
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.zIndex = '999';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Your Question';
    modalTitle.style.marginBottom = '10px';

    // Textarea for label
    const labelInput = document.createElement('input');
    labelInput.placeholder = 'Enter Question';
    labelInput.style.width = '92%';
    labelInput.style.marginBottom = '10px';
    labelInput.style.padding = '8px';
    labelInput.style.border = '1px solid #ccc';
    labelInput.style.borderRadius = '4px';

    // Textarea for row labels
    const rowLabelsInput = document.createElement('textarea');
    rowLabelsInput.placeholder = 'Enter Question, one line per row';
    rowLabelsInput.style.width = '91%';
    rowLabelsInput.style.height = '100px';
    rowLabelsInput.style.marginBottom = '10px';
    rowLabelsInput.style.border = '1px solid #ccc';
    rowLabelsInput.style.borderRadius = '4px';

    // Textarea for column labels
    const columnLabelsInput = document.createElement('textarea');
    columnLabelsInput.placeholder = 'Enter text, one line per column';
    columnLabelsInput.style.width = '91%';
    columnLabelsInput.style.height = '100px';
    columnLabelsInput.style.marginBottom = '10px';
    columnLabelsInput.style.border = '1px solid #ccc';
    columnLabelsInput.style.borderRadius = '4px';

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Generate Matrix';
    modalButton.style.padding = '8px 16px';
    modalButton.style.border = 'none';
    modalButton.style.backgroundColor = 'black';
    modalButton.style.color = '#fff';
    modalButton.style.fontWeight = 'bold';
    modalButton.style.borderRadius = '4px';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition = 'background-color 0.3s ease';

    modalButton.addEventListener('mouseover', () => {
        modalButton.style.backgroundColor = '#007BFF';
    });
    modalButton.addEventListener('mouseout', () => {
        modalButton.style.backgroundColor = 'black';
    });     

    const closeModal = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    modalButton.addEventListener('click', () => {
        const matrixLabel = labelInput.value.trim();
        const rowLabels = rowLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);
        const columnLabels = columnLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);

        if (!matrixLabel || rowLabels.length === 0 || columnLabels.length === 0) {
            alert('Please enter a matrix label and labels for both rows and columns.');
            return;
        }

        closeModal();

        // Wrapper for the entire matrix
        const matrixWrapper = document.createElement('div');
        matrixWrapper.style.backgroundColor = '#f9f9f9';
        matrixWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        matrixWrapper.style.borderRadius = '10px';
        matrixWrapper.style.padding = '20px';
        matrixWrapper.style.marginBottom = '20px';
        matrixWrapper.style.position = 'relative';

        // Add delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // FontAwesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.position = 'absolute';
        deleteIcon.style.right = '10px';
        deleteIcon.style.top = '10px';
        deleteIcon.style.transition = 'color 0.3s ease'; // Transition for smooth color change
        deleteIcon.title = 'Delete Matrix';

        // Hover effect for delete icon
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000'; // Red color on hover
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666'; // Original color
        });

        // Delete matrix element from form area
        deleteIcon.addEventListener('click', () => {
            formArea.removeChild(matrixWrapper);
        });

        // Add edit icon next to delete icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // FontAwesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666';
        editIcon.style.cursor = 'pointer';
        editIcon.style.position = 'absolute';
        editIcon.style.right = '35px'; // Position next to delete icon
        editIcon.style.top = '10px';
        editIcon.style.transition = 'color 0.3s ease'; // Transition for smooth color change
        editIcon.title = 'Edit Matrix Label';

        // Hover effect for edit icon
        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF'; // Blue color on hover
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666'; // Original color
        });

        // Edit label functionality
        editIcon.addEventListener('click', () => {
            labelInput.value = matrixLabelElement.textContent; // Pre-fill modal input with the current label
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            formArea.removeChild(matrixWrapper); // Remove current matrix for re-generation
        });

        // Append icons to the wrapper
        matrixWrapper.appendChild(deleteIcon);
        matrixWrapper.appendChild(editIcon);

        // Add matrix label
        const matrixLabelElement = document.createElement('h3');
        matrixLabelElement.textContent = matrixLabel;
        matrixLabelElement.style.textAlign = 'left';
        matrixLabelElement.style.fontSize = '16px';
        matrixLabelElement.style.color = 'black'; // Set label text to black
        matrixWrapper.appendChild(matrixLabelElement);

        // Column headers
        const columnHeader = document.createElement('div');
        columnHeader.style.display = 'grid';
        columnHeader.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
        columnHeader.style.gap = '10px';
        columnHeader.style.marginTop = '20px';

        const emptyCell = document.createElement('div'); // Empty cell for alignment
        columnHeader.appendChild(emptyCell);

        columnLabels.forEach((colLabel) => {
            const colHeader = document.createElement('div');
            colHeader.textContent = colLabel;
            colHeader.style.fontWeight = 'bold';
            colHeader.style.textAlign = 'center';
            columnHeader.appendChild(colHeader);
        });

        matrixWrapper.appendChild(columnHeader);

        // Add rows
        rowLabels.forEach((rowLabel) => {
            const row = document.createElement('div');
            row.style.display = 'grid';
            row.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
            row.style.gap = '10px';
            row.style.marginTop = '10px';

            const rowHeader = document.createElement('div');
            rowHeader.textContent = rowLabel;
            rowHeader.style.fontWeight = 'bold';
            rowHeader.style.textAlign = 'center';
            row.appendChild(rowHeader);

            columnLabels.forEach(() => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `row-${rowLabel}`;
                row.appendChild(radio);
            });

            matrixWrapper.appendChild(row);
        });

        formArea.appendChild(matrixWrapper);
    });

    modal.appendChild(modalTitle);
    modal.appendChild(labelInput);
    modal.appendChild(rowLabelsInput);
    modal.appendChild(columnLabelsInput);
    modal.appendChild(modalButton);

    // Append modal and overlay to the body
    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    // Show modal when matrix-radio is dropped
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}



















  //                                                        MATRIX CHECKBOX
  else if (type === 'matrix-checkbox') {
    // Modal dialog for matrix setup
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.zIndex = '999';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Question';
    modalTitle.style.marginBottom = '10px';

    // Textarea for label
    const labelInput = document.createElement('input');
    labelInput.placeholder = 'Enter Question';
    labelInput.style.width = '95%';
    labelInput.style.marginBottom = '10px';
    labelInput.style.padding = '8px';
    labelInput.style.border = '1px solid #ccc';
    labelInput.style.borderRadius = '4px';

    // Textarea for row labels
    const rowLabelsInput = document.createElement('textarea');
    rowLabelsInput.placeholder = 'Enter Question, one line per row';
    rowLabelsInput.style.width = '95%';
    rowLabelsInput.style.height = '100px';
    rowLabelsInput.style.marginBottom = '10px';
    rowLabelsInput.style.border = '1px solid #ccc';
    rowLabelsInput.style.borderRadius = '4px';

    // Textarea for column labels
    const columnLabelsInput = document.createElement('textarea');
    columnLabelsInput.placeholder = 'Enter text, one line per column';
    columnLabelsInput.style.width = '95%';
    columnLabelsInput.style.height = '100px';
    columnLabelsInput.style.marginBottom = '10px';
    columnLabelsInput.style.border = '1px solid #ccc';
    columnLabelsInput.style.borderRadius = '4px';

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Generate Matrix';
    modalButton.style.padding = '8px 16px';
    modalButton.style.border = 'none';
    modalButton.style.backgroundColor = '#00C851 ';
    modalButton.style.color = '#fff';
    modalButton.style.fontWeight = 'bold';
    modalButton.style.borderRadius = '4px';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition = 'background-color 0.3s ease';

    modalButton.addEventListener('mouseover', () => {
        modalButton.style.backgroundColor = '#007BFF';
    });
    modalButton.addEventListener('mouseout', () => {
        modalButton.style.backgroundColor = 'black';
    });

    const closeModal = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    modalButton.addEventListener('click', () => {
        const matrixLabel = labelInput.value.trim();
        const rowLabels = rowLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);
        const columnLabels = columnLabelsInput.value.split('\n').map(label => label.trim()).filter(label => label);

        if (!matrixLabel || rowLabels.length === 0 || columnLabels.length === 0) {
            alert('Please enter a matrix label and labels for both rows and columns.');
            return;
        }

        closeModal();

        // Wrapper for the entire matrix
        const matrixWrapper = document.createElement('div');
        matrixWrapper.style.backgroundColor = '#f9f9f9';
        matrixWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        matrixWrapper.style.borderRadius = '10px';
        matrixWrapper.style.padding = '20px';
        matrixWrapper.style.marginBottom = '20px';
        matrixWrapper.style.position = 'relative';

        // Add delete icon (FontAwesome) with hover effect and transition
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // FontAwesome delete icon
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666'; // Slightly dark color
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete';
        deleteIcon.style.position = 'absolute';
        deleteIcon.style.right = '20px';
        deleteIcon.style.top = '10px';
        deleteIcon.style.transition = 'color 0.3s ease'; // Transition for color change

        // Hover effect for delete icon with transition
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000'; // Red color on hover
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666'; // Original color
        });

        deleteIcon.addEventListener('click', () => formArea.removeChild(matrixWrapper));

        // Add edit icon (FontAwesome) with hover effect and transition
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // FontAwesome edit icon
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666'; // Slightly dark color
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit';
        editIcon.style.position = 'absolute';
        editIcon.style.right = '50px';
        editIcon.style.top = '10px';
        editIcon.style.transition = 'color 0.3s ease'; // Transition for color change

        // Hover effect for edit icon with transition
        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF'; // Blue color on hover
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666'; // Original color
        });

        editIcon.addEventListener('click', () => {
            labelInput.value = matrixLabel;
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            formArea.removeChild(matrixWrapper);
        });

        matrixWrapper.appendChild(deleteIcon);
        matrixWrapper.appendChild(editIcon);

        // Add matrix label
        const matrixLabelElement = document.createElement('h3');
        matrixLabelElement.textContent = matrixLabel;
        matrixLabelElement.style.textAlign = 'left';
        matrixLabelElement.style.fontSize = '16px';
        matrixLabelElement.style.color = 'black';
        matrixWrapper.appendChild(matrixLabelElement);

        // Column headers
        const columnHeader = document.createElement('div');
        columnHeader.style.display = 'grid';
        columnHeader.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
        columnHeader.style.gap = '10px';
        columnHeader.style.marginTop = '20px';

        const emptyCell = document.createElement('div'); // Empty cell for alignment
        columnHeader.appendChild(emptyCell);

        columnLabels.forEach((colLabel) => {
            const colHeader = document.createElement('div');
            colHeader.textContent = colLabel;
            colHeader.style.fontWeight = 'bold';
            colHeader.style.textAlign = 'center';
            columnHeader.appendChild(colHeader);
        });

        matrixWrapper.appendChild(columnHeader);

        // Add rows with checkboxes
        rowLabels.forEach((rowLabel) => {
            const row = document.createElement('div');
            row.style.display = 'grid';
            row.style.gridTemplateColumns = `100px repeat(${columnLabels.length}, 1fr)`;
            row.style.gap = '10px';
            row.style.marginTop = '10px';

            const rowHeader = document.createElement('div');
            rowHeader.textContent = rowLabel;
            rowHeader.style.fontWeight = 'bold';
            rowHeader.style.textAlign = 'center';
            row.appendChild(rowHeader);

            columnLabels.forEach(() => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox'; // Checkbox instead of radio button
                row.appendChild(checkbox);
            });

            matrixWrapper.appendChild(row);
        });

        formArea.appendChild(matrixWrapper);
    });

    modal.appendChild(modalTitle);
    modal.appendChild(labelInput);
    modal.appendChild(rowLabelsInput);
    modal.appendChild(columnLabelsInput);
    modal.appendChild(modalButton);

    // Append modal and overlay to the body
    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    // Show modal when matrix-checkbox is dropped
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}












  //                                                      MATRIX RADIO RATING
  else if (type === 'matrix-radio-rating') {
    const radioWrapper = document.createElement('div');
    radioWrapper.style.fontWeight = 'bold';
    radioWrapper.style.margin = '10px 0';
    radioWrapper.style.backgroundColor = '#f9f9f9';
    radioWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    radioWrapper.style.borderRadius = '10px';
    radioWrapper.style.padding = '20px';
    radioWrapper.style.position = 'relative';

    // Add delete icon (FontAwesome)
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can'; // FontAwesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666'; // Default color
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.style.position = 'absolute';
    deleteIcon.style.right = '20px';
    deleteIcon.style.top = '10px';
    deleteIcon.title = 'Delete';

    // Add hover effect for delete icon
    deleteIcon.style.transition = 'color 0.3s ease';
    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Red on hover
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Default color
    });

    deleteIcon.addEventListener('click', () => {
        formArea.removeChild(radioWrapper);
    });

    // Add edit icon (FontAwesome)
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // FontAwesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666'; // Default color
    editIcon.style.cursor = 'pointer';
    editIcon.style.position = 'absolute';
    editIcon.style.right = '45px';
    editIcon.style.top = '10px';
    editIcon.title = 'Edit';

    // Add hover effect for edit icon
    editIcon.style.transition = 'color 0.3s ease';
    editIcon.addEventListener('mouseover', () => {
        editIcon.style.color = '#007BFF'; // Blue on hover
    });
    editIcon.addEventListener('mouseout', () => {
        editIcon.style.color = '#666666'; // Default color
    });

    let currentLabels = []; // To store labels for preserving

    editIcon.addEventListener('click', () => {
        labelTextarea.value = currentLabels.join('\n');
        openModal();
    });

    // Modal elements
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.display = 'none';
    modal.style.zIndex = '1000';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.display = 'none';
    modalOverlay.style.zIndex = '999';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Question (One Per Line)';
    modalTitle.style.marginBottom = '10px';

    const labelTextarea = document.createElement('textarea');
    labelTextarea.style.width = '95%';
    labelTextarea.style.height = '100px';
    labelTextarea.style.padding = '8px';
    labelTextarea.style.marginBottom = '10px';
    labelTextarea.style.border = '1px solid #ccc';
    labelTextarea.style.borderRadius = '4px';

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Generate Rows';
    modalButton.style.padding = '8px 16px';
    modalButton.style.border = 'none';
    modalButton.style.backgroundColor = '#00C851';
    modalButton.style.color = '#fff';
    modalButton.style.borderRadius = '4px';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition = 'background-color 0.3s ease';

    modalButton.addEventListener('mouseover', () => {
        modalButton.style.backgroundColor = '#007BFF';
    });
    modalButton.addEventListener('mouseout', () => {
        modalButton.style.backgroundColor = 'black';
    });

    modalButton.addEventListener('click', () => {
        currentLabels = labelTextarea.value.split('\n').map(label => label.trim()).filter(label => label !== '');
        generateRadioRows(currentLabels);
        closeModal();
    });

    function openModal() {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
        labelTextarea.focus();
    }

    function closeModal() {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    modal.appendChild(modalTitle);
    modal.appendChild(labelTextarea);
    modal.appendChild(modalButton);

    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    // Function to create radio button rows based on labels
    function generateRadioRows(labels) {
        radioWrapper.innerHTML = ''; // Clear existing rows
        labels.forEach(label => createRadioRow(label));

        // Append icons after rows are created
        radioWrapper.appendChild(editIcon);
        radioWrapper.appendChild(deleteIcon);
    }

    // Function to create a row with radio buttons
    function createRadioRow(labelText) {
        const rowWrapper = document.createElement('div');
        rowWrapper.style.display = 'flex';
        rowWrapper.style.alignItems = 'center';
        rowWrapper.style.marginBottom = '20px';

        const rowLabel = document.createElement('span');
        rowLabel.textContent = labelText;
        rowLabel.style.marginRight = '20px';
        rowLabel.style.width = '150px';

        const radioGroup = document.createElement('div');
        radioGroup.style.display = 'flex';
        radioGroup.style.gap = '20px';

        // Create 5 radio buttons
        for (let i = 1; i <= 5; i++) {
            const radioLabel = document.createElement('label');
            radioLabel.style.display = 'flex';
            radioLabel.style.alignItems = 'center';
            radioLabel.style.cursor = 'pointer';

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `rating-${labelText}`;
            radioInput.value = i;

            const radioText = document.createElement('span');
            radioText.textContent = i;
            radioText.style.marginLeft = '5px';

            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioText);
            radioGroup.appendChild(radioLabel);
        }

        rowWrapper.appendChild(rowLabel);
        rowWrapper.appendChild(radioGroup);

        radioWrapper.appendChild(rowWrapper);
    }

    // Open the modal instantly after dragging and dropping
    openModal();

    formArea.appendChild(radioWrapper);
}














  //                                                       MATRIX STAR RATING
  else if (type === 'matrix-star-rating') {
    const starWrapper = document.createElement('div');
    starWrapper.style.fontWeight  = 'bold';
    starWrapper.style.margin = '10px 0';
    starWrapper.style.backgroundColor = '#f9f9f9';
    starWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    starWrapper.style.borderRadius = '10px';
    starWrapper.style.padding = '20px';
    starWrapper.style.position = 'relative';

    // Add delete icon (FontAwesome)
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can';  // FontAwesome delete icon class
    deleteIcon.style.fontSize = '20px';
    deleteIcon.style.color = '#666666';  // Default color
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.title = 'Delete';
    deleteIcon.style.position = 'absolute';
    deleteIcon.style.right = '20px';
    deleteIcon.style.top = '10px';

    // Add hover effect and transition for delete icon
    deleteIcon.style.transition = 'color 0.3s ease';
    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Red color on hover
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Default color
    });

    deleteIcon.addEventListener('click', () => {
        formArea.removeChild(starWrapper);
    });

    // Add edit icon (FontAwesome)
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square';  // FontAwesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666';  // Default color
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit';
    editIcon.alt = 'Edit';
    editIcon.style.position = 'absolute';
    editIcon.style.right = '50px';
    editIcon.style.top = '10px';

    // Add hover effect and transition for edit icon
    editIcon.style.transition = 'color 0.3s ease';
    editIcon.addEventListener('mouseover', () => {
        editIcon.style.color = '#007BFF'; // Blue color on hover
    });
    editIcon.addEventListener('mouseout', () => {
        editIcon.style.color = '#666666'; // Default color
    });

    let currentLabels = [];

    editIcon.addEventListener('click', () => {
        labelTextarea.value = currentLabels.join('\n');
        openModal();
    });

    // Modal elements for determining rows dynamically
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.display = 'none';
    modal.style.zIndex = '1000';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.display = 'none';
    modalOverlay.style.zIndex = '999';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Labels (One Per Line)';
    modalTitle.style.marginBottom = '10px';

    const labelTextarea = document.createElement('textarea');
    labelTextarea.style.width = '95%';
    labelTextarea.style.height = '100px';
    labelTextarea.style.padding = '8px';
    labelTextarea.style.marginBottom = '10px';
    labelTextarea.style.border = '1px solid #ccc';
    labelTextarea.style.borderRadius = '4px';

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Generate Rows';
    modalButton.style.padding = '8px 16px';
    modalButton.style.border = 'none';
    modalButton.style.backgroundColor = 'black';
    modalButton.style.color = '#fff';
    modalButton.style.borderRadius = '4px';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition = 'background-color 0.3s ease';

    modalButton.addEventListener('mouseover', () => {
        modalButton.style.backgroundColor = '#007BFF';
    });
    modalButton.addEventListener('mouseout', () => {
        modalButton.style.backgroundColor = 'black';
    });

    modalButton.addEventListener('click', () => {
        currentLabels = labelTextarea.value.split('\n').map(label => label.trim()).filter(label => label !== '');
        generateStarRows(currentLabels);
        closeModal();
    });

    function openModal() {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
        labelTextarea.focus();
    }

    function closeModal() {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    modal.appendChild(modalTitle);
    modal.appendChild(labelTextarea);
    modal.appendChild(modalButton);

    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    // Function to create star rows based on labels
    function generateStarRows(labels) {
        starWrapper.innerHTML = '';
        labels.forEach(label => createStarRow(label));
        starWrapper.appendChild(editIcon);
        starWrapper.appendChild(deleteIcon);
    }

    // Function to create a star rating row
    function createStarRow(labelText) {
        const rowWrapper = document.createElement('div');
        rowWrapper.style.display = 'flex';
        rowWrapper.style.alignItems = 'center';
        rowWrapper.style.marginBottom = '20px';

        const starLabel = document.createElement('span');
        starLabel.textContent = labelText;
        starLabel.style.marginRight = '20px';

        const starGroup = document.createElement('div');
        starGroup.style.display = 'flex';
        starGroup.style.gap = '30px'; // Increased spacing between stars

        let selectedStarIndex = null;

        // Create 5 stars
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            star.style.fontSize = '40px'; // Bigger stars
            star.style.color = '#ccc';
            star.style.cursor = 'pointer';

            star.addEventListener('mouseover', () => {
                if (selectedStarIndex === null) {
                    highlightStars(i + 1);
                }
            });

            star.addEventListener('mouseout', () => {
                if (selectedStarIndex === null) {
                    resetStars();
                }
            });

            star.addEventListener('click', () => {
                selectedStarIndex = i + 1;
                highlightStars(selectedStarIndex);
            });

            starGroup.appendChild(star);
        }

        function highlightStars(count) {
            Array.from(starGroup.children).forEach((star, index) => {
                star.style.color = index < count ? '#FFD700' : '#ccc';
            });
        }

        function resetStars() {
            Array.from(starGroup.children).forEach((star) => {
                star.style.color = '#ccc';
            });
        }

        rowWrapper.appendChild(starLabel);
        rowWrapper.appendChild(starGroup);

        starWrapper.appendChild(rowWrapper);
    }

    // Open the modal instantly after dragging and dropping
    openModal();

    formArea.appendChild(starWrapper);
}










  //                                                         UPLOAD SIGNATURE
  else if (type === 'upload-signature') {
    const imageWrapper = document.createElement('div');
    imageWrapper.style.margin = '10px 0';
    imageWrapper.style.display = 'flex';
    imageWrapper.style.flexDirection = 'column';
    imageWrapper.style.alignItems = 'center';
    imageWrapper.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    imageWrapper.style.backgroundColor = '#f9f9f9';
    imageWrapper.style.borderRadius = '10px';
    imageWrapper.style.padding = '20px';

    // File upload section
    const fileUploadSection = document.createElement('div');
    fileUploadSection.style.width = '80%';
    fileUploadSection.style.marginBottom = '20px';
    fileUploadSection.style.display = 'flex';
    fileUploadSection.style.flexDirection = 'column';
    fileUploadSection.style.alignItems = 'center';

    const labelContainer = document.createElement('div');
    labelContainer.style.display = 'flex';
    labelContainer.style.justifyContent = 'space-between';
    labelContainer.style.alignItems = 'center';
    labelContainer.style.width = '100%';

    const label = document.createElement('h3');
    label.textContent = 'Upload your Signature';
    label.style.fontSize = '16px';
    label.style.textAlign = 'left';
    label.style.margin = '0';

    // Icons (edit and delete)
    const iconContainer = document.createElement('div');
    iconContainer.style.display = 'flex';
    iconContainer.style.gap = '10px';

    const editIcon = document.createElement('i');
    editIcon.className = 'fa-regular fa-pen-to-square'; // FontAwesome edit icon class
    editIcon.style.fontSize = '20px';
    editIcon.style.color = '#666666'; // Default color
    editIcon.style.cursor = 'pointer';
    editIcon.title = 'Edit';

     // Add transition and hover effect for edit icon
     editIcon.style.transition = 'color 0.3s ease';
     editIcon.addEventListener('mouseover', () => {
         editIcon.style.color = '#007BFF'; // Hover color for edit icon
     });
     editIcon.addEventListener('mouseout', () => {
         editIcon.style.color = '#666666'; // Reset to default color
     });

     // Delete icon (FontAwesome)
     const deleteIcon = document.createElement('i');
     deleteIcon.className = 'fa-regular fa-trash-can'; // FontAwesome delete icon class
     deleteIcon.style.fontSize = '20px';
     deleteIcon.style.color = '#666666'; // Default color
     deleteIcon.style.cursor = 'pointer';
     deleteIcon.title = 'Delete';

      // Add transition and hover effect for delete icon
    deleteIcon.style.transition = 'color 0.3s ease';
    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.color = '#FF0000'; // Hover color for delete icon
    });
    deleteIcon.addEventListener('mouseout', () => {
        deleteIcon.style.color = '#666666'; // Reset to default color
    });

    deleteIcon.addEventListener('click', () => {
        imageWrapper.remove();
    });

    // Modal for editing the label
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f9f9f9';
    modal.style.padding = '20px 30px 20px 20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';
    modal.style.display = 'none';

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    modalOverlay.style.zIndex = '999';
    modalOverlay.style.display = 'none';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Enter Question';
    modalTitle.style.marginBottom = '10px';

    const labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.value = label.textContent;
    labelInput.style.width = '100%';
    labelInput.style.marginBottom = '10px';
    labelInput.style.padding = '8px';
    labelInput.style.border = '1px solid #ccc';
    labelInput.style.borderRadius = '4px';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.style.padding = '8px 16px';
    saveButton.style.border = 'none';
    saveButton.style.backgroundColor = '#007BFF';
    saveButton.style.color = '#fff';
    saveButton.style.borderRadius = '4px';
    saveButton.style.cursor = 'pointer';
    saveButton.style.transition = 'background-color 0.3s ease';

    saveButton.addEventListener('mouseover', () => {
        saveButton.style.backgroundColor =  '#007BFF';
    });
    saveButton.addEventListener('mouseout', () => {
        saveButton.style.backgroundColor =  'black';
    });

    saveButton.addEventListener('click', () => {
        if (labelInput.value.trim() !== '') {
            label.textContent = labelInput.value;
        }
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modal.appendChild(modalTitle);
    modal.appendChild(labelInput);
    modal.appendChild(saveButton);

    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    editIcon.addEventListener('click', () => {
        labelInput.value = label.textContent;
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);

    labelContainer.appendChild(label);
    labelContainer.appendChild(iconContainer);
    fileUploadSection.appendChild(labelContainer);

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*,.pdf';
    fileInput.style.marginBottom = '10px';

    const imagePreview = document.createElement('img');
    imagePreview.style.maxWidth = '300px';
    imagePreview.style.maxHeight = '300px';
    imagePreview.style.display = 'none';

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    fileUploadSection.appendChild(fileInput);
    fileUploadSection.appendChild(imagePreview);

    // Drawing signature section below the file upload
    const drawingSection = document.createElement('div');
    drawingSection.style.width = '80%';
    drawingSection.style.display = 'flex';
    drawingSection.style.flexDirection = 'column';
    drawingSection.style.alignItems = 'center';

    const signatureCanvasWrapper = document.createElement('div');
    signatureCanvasWrapper.style.padding = '10px';
    signatureCanvasWrapper.style.border = '2px solid #ccc';
    signatureCanvasWrapper.style.borderRadius = '10px';

    const signatureLabel = document.createElement('p');
    signatureLabel.textContent = 'Draw your Signature:';
    signatureLabel.style.textAlign = 'center';
    signatureCanvasWrapper.appendChild(signatureLabel);

    // Create the signature canvas
const signatureCanvas = document.createElement('canvas');
signatureCanvas.width = 300;
signatureCanvas.height = 100;

// Get the context of the canvas
const ctx = signatureCanvas.getContext('2d');

// Set the background color of the canvas to white
ctx.fillStyle = '#FFFFFF'; // White color
ctx.fillRect(0, 0, signatureCanvas.width, signatureCanvas.height); // Fill the entire canvas with white

ctx.strokeStyle = '#000000'; // Black color for the signature
ctx.lineWidth = 2;
let drawing = false;

// Event listener for mouse down (start drawing)
signatureCanvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Event listener for mouse move (drawing)
signatureCanvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// Event listener for mouse up (finish drawing)
signatureCanvas.addEventListener('mouseup', () => {
    drawing = false;
});

// Append the canvas to the signature canvas wrapper
signatureCanvasWrapper.appendChild(signatureCanvas);


    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '10px';

    const saveSignatureButton = document.createElement('button');
    saveSignatureButton.textContent = 'Save Signature';
    saveSignatureButton.style.padding = '8px 16px';
    saveSignatureButton.style.border = '1px solid #ccc';
    saveSignatureButton.style.backgroundColor = 'black';
    saveSignatureButton.style.color = '#fff';
    saveSignatureButton.style.fontWeight = 'bold';
    saveSignatureButton.style.borderRadius = '4px';
    saveSignatureButton.style.cursor = 'pointer';
    saveSignatureButton.style.transition = 'background-color 0.3s ease';

    saveSignatureButton.addEventListener('mouseover',()=>{
        saveSignatureButton.style.backgroundColor = '#007BFF';
    });
    saveSignatureButton.addEventListener('mouseout',()=>{
        saveSignatureButton.style.backgroundColor = 'black';
    });

    const resetCanvasButton = document.createElement('button');
    resetCanvasButton.textContent = 'Reset Signature';
    resetCanvasButton.style.padding = '8px 16px';
    resetCanvasButton.style.border = '1px solid #ccc';
    resetCanvasButton.style.backgroundColor = 'black';
    resetCanvasButton.style.color = '#fff';
    resetCanvasButton.style.fontWeight = 'bold';
    resetCanvasButton.style.borderRadius = '4px';
    resetCanvasButton.style.cursor = 'pointer';
    resetCanvasButton.style.transition = 'background-color 0.3s ease';

    resetCanvasButton.addEventListener('mouseover',()=>{
        resetCanvasButton.style.backgroundColor = '#FF0000';
    });
    resetCanvasButton.addEventListener('mouseout',()=>{
        resetCanvasButton.style.backgroundColor = 'black';
    });

    resetCanvasButton.addEventListener('click', () => {
        // Clear the canvas (remove the drawing)
        ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
        
        // Fill the canvas with white again after clearing
        ctx.fillStyle = '#FFFFFF'; // White color
        ctx.fillRect(0, 0, signatureCanvas.width, signatureCanvas.height); // Fill the entire canvas with white
    
        // Reset canvas size (if needed)
        signatureCanvas.width = 300;  // Reset canvas width
        signatureCanvas.height = 100; // Reset canvas height
    });
    

    buttonContainer.appendChild(saveSignatureButton);
    buttonContainer.appendChild(resetCanvasButton);

    signatureCanvasWrapper.appendChild(buttonContainer);

    drawingSection.appendChild(signatureCanvasWrapper);

    // Append both sections to the main wrapper
    imageWrapper.appendChild(fileUploadSection);
    imageWrapper.appendChild(drawingSection);

    formArea.appendChild(imageWrapper);
}





















  //                                                         CONTINNOUS SUM
  else if (type === 'continuous-sum') {
    // Create the modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#f9f9f9'; // Light background
    modal.style.padding = '20px 30px 20px 20px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow
    modal.style.borderRadius = '10px'; // Rounded corners
    modal.style.zIndex = '1000';
    modal.style.width = '400px';

    // Placeholder text at the top of the modal
    const placeholderText = document.createElement('p');
    placeholderText.textContent = 'Enter the Primary Label and Field Labels below';
    placeholderText.style.marginBottom = '15px';
    placeholderText.style.color = '#555'; // Subtle text color
    placeholderText.style.fontSize = '14px';
    modal.appendChild(placeholderText);

    // Input for primary label
    const primaryLabelInput = document.createElement('input');
    primaryLabelInput.placeholder = 'Enter Question';
    primaryLabelInput.style.width = '100%';
    primaryLabelInput.style.marginBottom = '15px';
    primaryLabelInput.style.borderRadius = '5px';
    primaryLabelInput.style.border = '1px solid #ccc';
    primaryLabelInput.style.padding = '10px';
    primaryLabelInput.style.fontSize = '14px';
    primaryLabelInput.style.background = '#f9f9f9'; // Light background for input
    modal.appendChild(primaryLabelInput);

    // Text area for label input
    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Enter field labels';
    textArea.style.width = '100%';
    textArea.style.height = '100px';
    textArea.style.borderRadius = '5px';
    textArea.style.border = '1px solid #ccc';
    textArea.style.padding = '10px';
    textArea.style.fontSize = '14px';
    textArea.style.background = '#f9f9f9'; // Light background for input
    modal.appendChild(textArea);

    // Save and Cancel buttons
    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.marginTop = '20px';
    buttonWrapper.style.display = 'flex';
    buttonWrapper.style.justifyContent = 'space-between';
    buttonWrapper.style.gap = '10px';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.style.flex = '1';
    saveButton.style.background = 'black '; // Primary button color
    saveButton.style.color = '#fff';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '5px';
    saveButton.style.padding = '10px';
    saveButton.style.cursor = 'pointer';
    saveButton.style.fontWeight = 'bold';
    saveButton.style.transition = 'background-color 0.3s ease';

    saveButton.addEventListener('mouseover',()=>{
        saveButton.style.backgroundColor = '#007BFF';
    });
    saveButton.addEventListener('mouseout',()=>{
        saveButton.style.backgroundColor = 'black';
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.flex = '1';
    cancelButton.style.background = '#007BFF'; // Neutral button color
    cancelButton.style.color = '#fff';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.padding = '10px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.fontWeight = 'bold';
    cancelButton.style.transition = 'background-color 0.3s ease';

    cancelButton.addEventListener('mouseover',()=>{
        cancelButton.style.backgroundColor = '#FF0000';
    });
    cancelButton.addEventListener('mouseout',()=>{
        cancelButton.style.backgroundColor = 'black';
    });
    // Append buttons to the modal
    buttonWrapper.appendChild(saveButton);
    buttonWrapper.appendChild(cancelButton);
    modal.appendChild(buttonWrapper);

    // Append modal to body
    document.body.appendChild(modal);

    // Save button functionality
    saveButton.addEventListener('click', function () {
        const primaryLabelText = primaryLabelInput.value.trim();
        const lines = textArea.value.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines

        if (primaryLabelText === '') {
            alert('Please enter a primary label.');
            return;
        }

        if (lines.length === 0) {
            alert('Please enter at least one label.');
            return;
        }

        const outputWrapper = document.createElement('div');
        outputWrapper.style.position = 'relative';
        outputWrapper.style.margin = '10px 0';
        outputWrapper.style.padding = '10px';
        outputWrapper.style.border = '1px solid #ccc';
        outputWrapper.style.background = '#f9f9f9';
        outputWrapper.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        outputWrapper.style.borderRadius = '10px';

        let totalSum = 0;
        const totalSumDisplay = document.createElement('div');
        totalSumDisplay.textContent = `Total Sum: ${totalSum}`;
        totalSumDisplay.style.marginTop = '10px';
        totalSumDisplay.style.fontWeight = 'bold';

        // Create primary label container
        const primaryLabelContainer = document.createElement('div');
        primaryLabelContainer.style.position = 'relative';
        primaryLabelContainer.style.marginBottom = '15px'; // Space for labels

        // Create primary label and position icons on the far right
        const primaryLabel = document.createElement('label');
        primaryLabel.textContent = primaryLabelText; // Use the value from the modal input
        primaryLabel.style.fontWeight = 'bold';
        primaryLabel.style.marginRight = '20px'; // Space between label and icons

        // Add edit and delete icons to the far right
        const iconWrapper = document.createElement('div');
        iconWrapper.style.position = 'absolute';
        iconWrapper.style.top = '50%';
        iconWrapper.style.right = '10px';
        iconWrapper.style.transform = 'translateY(-50%)';
        iconWrapper.style.display = 'flex';
        iconWrapper.style.gap = '10px';

        // FontAwesome Edit Icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fa-regular fa-pen-to-square'; // FontAwesome edit icon class
        editIcon.style.fontSize = '20px';
        editIcon.style.color = '#666666'; // Blue color
        editIcon.style.cursor = 'pointer';
        editIcon.title = 'Edit'; // Tooltip text
        editIcon.style.transition = 'color 0.3s ease'; // Smooth color transition
        editIcon.addEventListener('mouseover', () => {
            editIcon.style.color = '#007BFF'; // Darker blue on hover
        });
        editIcon.addEventListener('mouseout', () => {
            editIcon.style.color = '#666666'; // Original blue color
        });

        // FontAwesome Delete Icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-regular fa-trash-can'; // FontAwesome delete icon class
        deleteIcon.style.fontSize = '20px';
        deleteIcon.style.color = '#666666'; // Red color
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.title = 'Delete'; // Tooltip text
        deleteIcon.style.transition = 'color 0.3s ease'; // Smooth color transition
        deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.color = '#FF0000'; // Darker red on hover
        });
        deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.color = '#666666'; // Original red color
        });

        iconWrapper.appendChild(editIcon);
        iconWrapper.appendChild(deleteIcon);
        primaryLabelContainer.appendChild(primaryLabel);
        primaryLabelContainer.appendChild(iconWrapper);
        outputWrapper.appendChild(primaryLabelContainer);

        const labels = [];
        // Generate labeled input fields
        lines.forEach(labelText => {
            const fieldWrapper = document.createElement('div');
            fieldWrapper.style.display = 'flex';
            fieldWrapper.style.alignItems = 'center';
            fieldWrapper.style.marginBottom = '10px';
            fieldWrapper.style.gap = '10px';

            const label = document.createElement('label');
            label.textContent = labelText;
            label.style.width = '150px'; // Fixed width for labels
            label.style.fontWeight = 'bold';
            labels.push(label);

            const inputField = document.createElement('input');
            inputField.type = 'number';
            inputField.style.width = '150px';

            // Update sum dynamically when input changes
            inputField.addEventListener('input', function () {
                totalSum = 0;
                const allInputFields = outputWrapper.querySelectorAll('input[type="number"]');
                allInputFields.forEach(input => {
                    totalSum += parseFloat(input.value) || 0;
                });
                totalSumDisplay.textContent = `Total Sum: ${totalSum}`;
            });

            fieldWrapper.appendChild(label);
            fieldWrapper.appendChild(inputField);
            outputWrapper.appendChild(fieldWrapper);
        });

        // Append the total sum display and output wrapper to the form area
        outputWrapper.appendChild(totalSumDisplay);
        formArea.appendChild(outputWrapper);

        // Edit functionality for the primary label
        editIcon.addEventListener('click', () => {
            const editModal = document.createElement('div');
            editModal.style.position = 'fixed';
            editModal.style.top = '50%';
            editModal.style.left = '50%';
            editModal.style.transform = 'translate(-50%, -50%)';
            editModal.style.background = '#f9f9f9';
            editModal.style.padding = '20px 30px 20px 20px';
            editModal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            editModal.style.borderRadius = '10px';
            editModal.style.zIndex = '1000';
            editModal.style.width = '400px';

            const editPrimaryLabelInput = document.createElement('input');
            editPrimaryLabelInput.style.width = '100%';
            editPrimaryLabelInput.style.marginBottom = '15px';
            editPrimaryLabelInput.value = primaryLabelText; // Pre-fill with current primary label
            editPrimaryLabelInput.style.borderRadius = '5px';
            editPrimaryLabelInput.style.border = '1px solid #ccc';
            editPrimaryLabelInput.style.padding = '10px';
            editPrimaryLabelInput.style.fontSize = '14px';
            editPrimaryLabelInput.style.background = '#f9f9f9'; // Light background for input
            editModal.appendChild(editPrimaryLabelInput);

            const saveEditButton = document.createElement('button');
            saveEditButton.textContent = 'Save';
            saveEditButton.style.flex = '1';
            saveEditButton.style.background = '#00C851 ';
            saveEditButton.style.color = '#fff';
            saveEditButton.style.fontWeight = 'bold';
            saveEditButton.style.border = 'none';
            saveEditButton.style.borderRadius = '5px';
            saveEditButton.style.padding = '10px';
            saveEditButton.style.cursor = 'pointer';

            const cancelEditButton = document.createElement('button');
            cancelEditButton.textContent = 'Cancel';
            cancelEditButton.style.flex = '1';
            cancelEditButton.style.background = '#007BFF';
            cancelEditButton.style.border = 'none';
            cancelEditButton.style.color = '#fff';
            cancelEditButton.style.fontWeight = 'bold';
            cancelEditButton.style.borderRadius = '5px';
            cancelEditButton.style.padding = '10px';
            cancelEditButton.style.cursor = 'pointer';

            const editButtonWrapper = document.createElement('div');
            editButtonWrapper.style.marginTop = '20px';
            editButtonWrapper.style.display = 'flex';
            editButtonWrapper.style.justifyContent = 'space-between';
            editButtonWrapper.style.gap = '10px';

            editButtonWrapper.appendChild(saveEditButton);
            editButtonWrapper.appendChild(cancelEditButton);
            editModal.appendChild(editButtonWrapper);

            document.body.appendChild(editModal);

            saveEditButton.addEventListener('click', () => {
                const updatedPrimaryLabelText = editPrimaryLabelInput.value.trim();
                if (updatedPrimaryLabelText === '') {
                    alert('Please enter a primary label.');
                    return;
                }
                primaryLabel.textContent = updatedPrimaryLabelText;
                document.body.removeChild(editModal);
            });

            cancelEditButton.addEventListener('click', () => {
                document.body.removeChild(editModal);
            });
        });

        // Delete functionality for the entire wrapper
        deleteIcon.addEventListener('click', () => {
            outputWrapper.remove();
        });

        // Close the modal
        document.body.removeChild(modal);
    });

    // Cancel button functionality
    cancelButton.addEventListener('click', function () {
        document.body.removeChild(modal); // Close the modal without saving
    });
}










  



















});