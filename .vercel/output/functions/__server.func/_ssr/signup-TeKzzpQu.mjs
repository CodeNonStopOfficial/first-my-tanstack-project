import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Button$1 } from "./button-BzYeyuLw.mjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, authClient } from "./card-8t3TIS8y.mjs";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, signupSchema } from "./field-BNSKzyXF.mjs";
import { Input$1 } from "./input-DSq_ydeb.mjs";
import { Link, useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { toast } from "../_libs/sonner.mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-TeKzzpQu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupForm() {
	const navigate = useNavigate();
	const [isPending, startTransition] = (0, import_react.useTransition)();
	const form = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			password: ""
		},
		validators: { onSubmit: signupSchema },
		onSubmit: ({ value }) => {
			startTransition(async () => {
				await authClient.signUp.email({
					name: value.fullName,
					email: value.email,
					password: value.password,
					fetchOptions: {
						onSuccess: () => {
							toast.success("Account creates successfully");
							navigate({ to: "/" });
						},
						onError: ({ error }) => {
							toast.error(error.message);
						}
					}
				});
			});
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "max-w-md w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Create an account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Enter your information below to create your account" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				form.handleSubmit();
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "fullName",
					children: (field) => {
						const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							"data-invalid": isInvalid,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: field.name,
									children: "Full Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									id: field.name,
									name: field.name,
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value),
									"aria-invalid": isInvalid,
									placeholder: "John Fisher",
									autoComplete: "off",
									className: "py-5"
								}),
								isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: field.state.meta.errors })
							]
						});
					}
				}),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					disabled: isPending,
					type: "submit",
					className: "py-5",
					children: isPending ? "Creating..." : "Create Account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldDescription, {
					className: "px-6 text-center",
					children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						children: "Sign in"
					})]
				})] }) })
			] })
		}) })]
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupForm, {});
}
//#endregion
export { RouteComponent as component };
