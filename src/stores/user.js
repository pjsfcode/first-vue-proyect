import { createUserWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../firebase/firebaseConfig";

export const useUserStore = defineStore("userStore", {
	state: () => ({
		userData: "pedrKAo@test.com",
	}),

	getters: {
		minus(state) {
			return state.userData.toLowerCase();
		},
	},

	actions: {
		async registerUser(email, pass) {
			try {
				// We receive user after user's creation
				const { user } = await createUserWithEmailAndPassword(
					auth,
					email,
					pass
				);
				console.log(user);
			} catch (error) {
				console.log(error);
			}
		},
	},
});
