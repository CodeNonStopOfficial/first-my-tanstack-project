import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { ScriptOnce } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-provider-o93OQFIN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MEDIA = "(prefers-color-scheme: dark)";
var ThemeProviderContext = (0, import_react.createContext)({
	theme: "system",
	setTheme: () => null
});
function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme", ...props }) {
	const [theme, setTheme] = (0, import_react.useState)(() => (typeof window !== "undefined" ? localStorage.getItem(storageKey) : null) || defaultTheme);
	const handleMediaQuery = (0, import_react.useCallback)((e) => {
		if (theme !== "system") return;
		const root = window.document.documentElement;
		const targetTheme = e.matches ? "dark" : "light";
		if (!root.classList.contains(targetTheme)) {
			root.classList.remove("light", "dark");
			root.classList.add(targetTheme);
		}
	}, [theme]);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia(MEDIA);
		media.addEventListener("change", handleMediaQuery);
		handleMediaQuery(media);
		return () => media.removeEventListener("change", handleMediaQuery);
	}, [handleMediaQuery]);
	(0, import_react.useEffect)(() => {
		const root = window.document.documentElement;
		let targetTheme;
		if (theme === "system") {
			localStorage.removeItem(storageKey);
			targetTheme = window.matchMedia(MEDIA).matches ? "dark" : "light";
		} else {
			localStorage.setItem(storageKey, theme);
			targetTheme = theme;
		}
		if (!root.classList.contains(targetTheme)) {
			root.classList.remove("light", "dark");
			root.classList.add(targetTheme);
		}
	}, [theme, storageKey]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme
	}), [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProviderContext, {
		...props,
		value,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptOnce, { children: `document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            )` }), children]
	});
}
var useTheme = () => {
	const context = (0, import_react.use)(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
//#endregion
export { ThemeProvider, useTheme };
