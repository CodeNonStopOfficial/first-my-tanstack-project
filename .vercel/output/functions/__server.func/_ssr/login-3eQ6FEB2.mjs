import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Button$1 } from "./button-BzYeyuLw.mjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, authClient } from "./card-8t3TIS8y.mjs";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, loginSchema } from "./field-BNSKzyXF.mjs";
import { Input$1 } from "./input-DSq_ydeb.mjs";
import { Link, useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { toast } from "../_libs/sonner.mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-3eQ6FEB2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginForm() {
	const navigate = useNavigate();
	const [isPending, startTransition] = (0, import_react.useTransition)();
	const form = useForm({
		defaultValues: {
			email: "",
			password: ""
		},
		validators: { onSubmit: loginSchema },
		onSubmit: ({ value }) => {
			startTransition(async () => {
				await authClient.signIn.email({
					email: value.email,
					password: value.password,
					fetchOptions: {
						onSuccess: () => {
							toast.success("Logged in successfully");
							navigate({ to: "/" });
						},
						onError: ({ error }) => {
							toast.error(error.message || "Invalide Candidate");
						}
					}
				});
			});
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "max-w-md w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Login to your account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Enter your email below to login to your account" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				form.handleSubmit();
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "email",
					children: (field) => {
						const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							"data-invalid": isInvalid,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: field.name,
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									id: field.name,
									name: field.name,
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value),
									"aria-invalid": isInvalid,
									placeholder: "john@john.com",
									type: "email",
									autoComplete: "off",
									className: "py-5"
								}),
								isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: field.state.meta.errors })
							]
						});
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "password",
					children: (field) => {
						const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							"data-invalid": isInvalid,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: field.name,
									children: "Password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									id: field.name,
									name: field.name,
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value),
									"aria-invalid": isInvalid,
									placeholder: "******",
									type: "password",
									autoComplete: "off",
									className: "py-5"
								}),
								isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: field.state.meta.errors })
							]
						});
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					disabled: isPending,
					type: "submit",
					className: "py-5",
					children: isPending ? "Logging in..." : "Login"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldDescription, {
					className: "text-center",
					children: ["Don't have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						children: "Sign up"
					})]
				})] })
			] })
		}) })]
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, {});
}
//#endregion
export { RouteComponent as component };
