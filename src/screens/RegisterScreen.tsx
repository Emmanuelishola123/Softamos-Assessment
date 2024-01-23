import {
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
  Text,
} from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Artwork03 from "../components/artworks/Artwork03";
import { REGISTER_SCREEN } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { RootStackScreenProps } from "../navigations/types";
import { Controller, useForm } from "react-hook-form";

const RegisterScreen = ({ navigation }: RootStackScreenProps<"RegisterScreen">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();



  const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });


  console.log('errors', errors);




  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        {/* It Works! */}
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 52,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.replace("SecondIntroScreen")}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Artwork03 width={240} height={240} />
        </Animated.View>

        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
            }}
          >
            {REGISTER_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: theme.colors.text,
            }}
          >
            {REGISTER_SCREEN.description}
          </Animated.Text>

          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholder="Your Email"
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: theme.colors.text,
                      paddingLeft: 48,
                      paddingRight: 12,
                      height: 48,
                      borderRadius: 12,
                      backgroundColor: theme.colors.background,
                      width: "100%",
                    }}
                  />
                )}
                name="email"
                rules={{ required: true }}
              />
              <Icons
                name="email"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholder="Your Password"
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: theme.colors.text,
                      paddingLeft: 48,
                      paddingRight: 12,
                      height: 48,
                      borderRadius: 12,
                      backgroundColor: theme.colors.background,
                      width: "100%",
                    }}
                  />
                )}
                name="password"
                rules={{ required: true }}
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%", justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <Text style={{ color: theme.colors.text }}> Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={{ color: theme.colors.primary, fontWeight: '700', fontSize: 16 }}>Login </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton
                label="Register"
                onPress={() => navigation.navigate("Wallet")}
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
