'use strict';
Blockly.Blocks['start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("When")
      .appendField(new Blockly.FieldImage("https://freepngimg.com/thumb/categories/1398.png", 18, 18, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Clicked");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setStyle('start_blocks');
  }
};

Blockly.Blocks['move_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move")
      .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"]]), "FB")
      .appendField("1 step, when EduBot is facing")
      .appendField(new Blockly.FieldDropdown([["upward", "move_upward"], ["downward", "move_downward"], ["right", "move_right"], ["left", "move_left"]]), "move_1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setStyle('Move_blocks');
  }
};

Blockly.Blocks['turn'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turn")
      .appendField(new Blockly.FieldDropdown([["right", "right"], ["left", "left"]]), "RL")
      .appendField("when EduBot is facing")
      .appendField(new Blockly.FieldDropdown([["upward", "up"], ["right", "right"], ["downward", "down"], ["left", "left"]]), "turn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setStyle('Move_blocks');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turn right when EduBot facing")
      .appendField(new Blockly.FieldDropdown([["upward", "up"], ["right", "right"], ["downward", "down"], ["left", "left"]]), "turnR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setStyle('Move_blocks');
  }
};

Blockly.Blocks['turn_left'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turn left when EduBot is facing")
      .appendField(new Blockly.FieldDropdown([["upward", "up"], ["left", "left"], ["downward", "down"], ["right`", "right"]]), "turnL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setStyle('Move_blocks');
  }
};

Blockly.JavaScript['start'] = function (block) {
  return '';
}


Blockly.JavaScript['move_1'] = function (block) {
  var dropdown_move_1 = block.getFieldValue('move_1');
  var dropdown_FB = block.getFieldValue('FB');
  if (dropdown_FB == "forward") {
    if (dropdown_move_1 == "move_upward") {
      return "moveUpward();\n";
    }
    else if (dropdown_move_1 == "move_downward") {
      return "moveDownward();\n";
    }
    else if (dropdown_move_1 == "move_right") {
      return "moveRight();\n";
    }
    else if (dropdown_move_1 == "move_left") {
      return "moveLeft();\n";
    }
  }
  else if (dropdown_FB == "backward") {
    if (dropdown_move_1 == "move_upward") {
      return "moveDown();\n";
    }
    else if (dropdown_move_1 == "move_downward") {
      return "moveUp();\n";
    }
    else if (dropdown_move_1 == "move_right") {
      return "moveLeftB();\n";
    }
    else if (dropdown_move_1 == "move_left") {
      return "moveRightB();\n";
    }
  }
};

Blockly.JavaScript['turn_right'] = function (block) {
  var dropdown_turnR = block.getFieldValue('turnR');

  if (dropdown_turnR == "up") {
    return "turnRightUp();\n";
  }
  else if (dropdown_turnR == "right") {
    return "turnRight();\n";
  }
  else if (dropdown_turnR == "down") {
    return "turnRightDown();\n";
  }
  else if (dropdown_turnR == "left") {
    return "turnRightLeft();\n";
  }
};

Blockly.JavaScript['turn_left'] = function (block) {
  var dropdown_turnL = block.getFieldValue('turnL');

  if (dropdown_turnL == "up") {
    return "turnLeftUp();\n";
  }
  else if (dropdown_turnL == "left") {
    return "turnLeft();\n";
  }
  else if (dropdown_turnL == "down") {
    return "turnLeftDown();\n";
  }
  else if (dropdown_turnL == "right") {
    return "turnLeftRight();\n";
  }
};

Blockly.JavaScript['turn'] = function (block) {
  var dropdown_rl = block.getFieldValue('RL');
  var dropdown_turn = block.getFieldValue('turn');

  if (dropdown_rl == "right") {
    if (dropdown_turn == "up") {
      return "turnRightUp();\n";
    }
    else if (dropdown_turn == "right") {
      return "turnRight();\n";
    }
    else if (dropdown_turn == "down") {
      return "turnRightDown();\n";
    }
    else if (dropdown_turn == "left") {
      return "turnRightLeft();\n";
    }
  }
  else if (dropdown_rl == "left") {
    if (dropdown_turn == "up") {
      return "turnLeftUp();\n";
    }
    else if (dropdown_turn == "left") {
      return "turnLeft();\n";
    }
    else if (dropdown_turn == "down") {
      return "turnLeftDown();\n";
    }
    else if (dropdown_turn == "right") {
      return "turnLeftRight();\n";
    }
  }
};


