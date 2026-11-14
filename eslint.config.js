import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // scripts/ holds plain Node tools (fps check, licence report), outside the typed project.
  { ignores: ["dist", "public", "eslint.config.js", ".claude", "scripts"] },
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: { "no-console": "error" },
  },
  { files: ["src/core/log.ts"], rules: { "no-console": "off" } },
);
