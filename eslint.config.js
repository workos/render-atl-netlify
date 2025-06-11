// @ts-check
import * as js from "@chance/eslint";
import * as react from "@chance/eslint/react";
import * as typescript from "@chance/eslint/typescript";
import globals from "globals";

export default [
	//
	js.config,
	typescript.config,
	react.config,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
];
