import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { SubmitButtonProps } from "../types/types";
import { FramesConsumer } from "../Frames";

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = (props) => {
  return (
    <FramesConsumer>
      {({ submitCard }) => {
        if (!submitCard) {
          throw "It looks like you are trying to render the SubmitButton outside of the Frames Component.";
        }

        const { textStyle: textStyle, title: title, ...touchableProps } = props;

        return (
          <TouchableOpacity
            {...touchableProps}
            style={[styles.buttonContainer, touchableProps.style]}
            onPress={(e) => {
              if(_a.state.cardNumber != null && _a.state.expiryDate != null && _a.state.cvv != null ){
                submitCard();
            }else{
               if(_a.state.cardNumber == null){
                    props.showError("CARD")
               }
               if(_a.state.expiryDate == null){
                    props.showError("EXPIRY")
               }
               if(_a.state.cvv == null){
                props.showError("CVV")
               }
                return 
            }
              if (props.onPress) props.onPress(e);
            }}
          >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      }}
    </FramesConsumer>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
  },
});

export default SubmitButton;
