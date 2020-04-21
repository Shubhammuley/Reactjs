<<<<<<< HEAD
import React, { useState, Fragment } from 'react';

import {
  EuiComboBox,
  EuiButton,
  EuiPopover,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiSpacer,
} from '@elastic/eui';

const options = [
  {
    label: 'Titan',
    'data-test-subj': 'titanOption',
  },
  {
    label: 'Enceladus',
  },
  {
    label: 'Mimas',
  },
  {
    label: 'Dione',
  },
  {
    label: 'Iapetus',
  },
  {
    label: 'Phoebe',
  },
  {
    label: 'Rhea',
  },
  {
    label:
      "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
  },
  {
    label: 'Tethys',
  },
  {
    label: 'Hyperion',
  },
];

export default () => {
  const [selectedOptions, setSelected] = useState([options[2], options[4]]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPopoverOpen, setPopover] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const togglePopover = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    if (!searchValue) {
      return;
    }

    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        option => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      options.push(newOption);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };

  const comboBox = (
    <EuiComboBox
      placeholder="Select or create options"
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
    />
  );

  const button = (
    <EuiButton iconType="arrowDown" iconSide="right" onClick={togglePopover}>
      Open popover
    </EuiButton>
  );

  let modal;

  if (isModalVisible) {
    modal = (
      
        <div style={{paddingLeft:'25%'}}>

        <EuiModal onClose={closeModal} style={{ width: '800px' }}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>{comboBox}</EuiModalBody>
        </EuiModal>
      
        </div>
    );
  }

  return (
    <Fragment>
    
      <EuiButton onClick={showModal}>Show modal</EuiButton>

      {modal}
    </Fragment>
=======

import React, { useState } from 'react';

import {
  EuiPopover,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';

export default () => {
  const [isPopoverOpen1, setIsPopoverOpen1] = useState(false);
  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);
  const [isPopoverOpen3, setIsPopoverOpen3] = useState(false);
  const [isPopoverOpen4, setIsPopoverOpen4] = useState(false);
  const [isPopoverOpen5, setIsPopoverOpen5] = useState(false);
  const [isPopoverOpen6, setIsPopoverOpen6] = useState(false);
  const [isPopoverOpen7, setIsPopoverOpen7] = useState(false);
  const [isPopoverOpen8, setIsPopoverOpen8] = useState(false);
  const [isPopoverOpen9, setIsPopoverOpen9] = useState(false);
  const [isPopoverOpen10, setIsPopoverOpen10] = useState(false);
  const [isPopoverOpen11, setIsPopoverOpen11] = useState(false);
  const [isPopoverOpen12, setIsPopoverOpen12] = useState(false);

  const onButtonClick1 = () =>
    setIsPopoverOpen1(isPopoverOpen1 => !isPopoverOpen1);
  const closePopover1 = () => setIsPopoverOpen1(false);

  const onButtonClick2 = () =>
    setIsPopoverOpen2(isPopoverOpen2 => !isPopoverOpen2);
  const closePopover2 = () => setIsPopoverOpen2(false);

  const onButtonClick3 = () =>
    setIsPopoverOpen3(isPopoverOpen3 => !isPopoverOpen3);
  const closePopover3 = () => setIsPopoverOpen3(false);

  const onButtonClick4 = () =>
    setIsPopoverOpen4(isPopoverOpen4 => !isPopoverOpen4);
  const closePopover4 = () => setIsPopoverOpen4(false);

  const onButtonClick5 = () =>
    setIsPopoverOpen5(isPopoverOpen5 => !isPopoverOpen5);
  const closePopover5 = () => setIsPopoverOpen5(false);

  const onButtonClick6 = () =>
    setIsPopoverOpen6(isPopoverOpen6 => !isPopoverOpen6);
  const closePopover6 = () => setIsPopoverOpen6(false);

  const onButtonClick7 = () =>
    setIsPopoverOpen7(isPopoverOpen7 => !isPopoverOpen7);
  const closePopover7 = () => setIsPopoverOpen7(false);

  const onButtonClick8 = () =>
    setIsPopoverOpen8(isPopoverOpen8 => !isPopoverOpen8);
  const closePopover8 = () => setIsPopoverOpen8(false);

  const onButtonClick9 = () =>
    setIsPopoverOpen9(isPopoverOpen9 => !isPopoverOpen9);
  const closePopover9 = () => setIsPopoverOpen9(false);

  const onButtonClick10 = () =>
    setIsPopoverOpen10(isPopoverOpen10 => !isPopoverOpen10);
  const closePopover10 = () => setIsPopoverOpen10(false);

  const onButtonClick11 = () =>
    setIsPopoverOpen11(isPopoverOpen11 => !isPopoverOpen11);
  const closePopover11 = () => setIsPopoverOpen11(false);

  const onButtonClick12 = () =>
    setIsPopoverOpen12(isPopoverOpen12 => !isPopoverOpen12);
  const closePopover12 = () => setIsPopoverOpen12(false);

  const noteHeight = (
    <EuiText>
      <p style={{ width: 200 }}>
        For left- or right-aligned popovers, make sure there is sufficient
        content. If the popover height is too short, the arrow positioning will
        appear off.
      </p>
    </EuiText>
  );

  return (
    <div style={{paddingLeft:"20%",
                 paddingTop:"10%"}}>
      <EuiPopover
            ownFocus
            button={
              <EuiButton
                iconType="arrowDown"
                iconSide="right"
                onClick={onButtonClick8}>
                leftCenter
              </EuiButton>
            }
            isOpen={isPopoverOpen8}
            closePopover={closePopover8}
            anchorPosition="leftCenter">
            Popover content
          </EuiPopover>
    </div>
>>>>>>> 5f58eb8a4c9ac08cf0853596748ebab2d18177d2
  );
};