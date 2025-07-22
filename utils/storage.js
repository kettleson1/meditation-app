// utils/storage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save user profile to local storage
 * @param {Object} profile - user profile object
 */
export const saveUserProfile = async (profile) => {
  try {
    await AsyncStorage.setItem("userProfile", JSON.stringify(profile));
  } catch (error) {
    console.log("Error saving user profile:", error);
  }
};

/**
 * Get user profile from local storage
 * @returns {Object|null} user profile object or null
 */
export const getUserProfile = async () => {
  try {
    const profile = await AsyncStorage.getItem("userProfile");
    return profile ? JSON.parse(profile) : null;
  } catch (error) {
    console.log("Error fetching user profile:", error);
  }
};

/**
 * Save a user action to local storage
 * @param {string} action - description of action
 */
export const saveUserAction = async (action) => {
  try {
    let actions = await AsyncStorage.getItem("userActions");
    actions = actions ? JSON.parse(actions) : [];
    actions.push(action);
    await AsyncStorage.setItem("userActions", JSON.stringify(actions));
  } catch (error) {
    console.log("Error saving user action:", error);
  }
};

/**
 * Get all user actions from local storage
 * @returns {Array} user actions array
 */
export const getUserActions = async () => {
  try {
    const actions = await AsyncStorage.getItem("userActions");
    return actions ? JSON.parse(actions) : [];
  } catch (error) {
    console.log("Error fetching user actions:", error);
    return [];
  }
};