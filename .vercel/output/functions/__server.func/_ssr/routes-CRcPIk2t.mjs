import { __toESM } from "../_runtime.mjs";
import { AvatarFallback as AvatarFallback$1, AvatarImage as AvatarImage$1, AvatarRoot, MenuItem, MenuPopup, MenuPortal, MenuPositioner, MenuRoot, MenuTrigger, Separator, require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Button$1, buttonVariants, cn } from "./button-BzYeyuLw.mjs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, authClient } from "./card-8t3TIS8y.mjs";
import { Separator$1 } from "./separator-BYTP7I7o.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { toast } from "../_libs/sonner.mjs";
import { ArrowRight, BookOpen, Braces, Check, Database, Globe, Layers, LayoutDashboard, Lock, LogOut, Moon, Settings, Sparkles, Sun, User } from "../_libs/lucide-react.mjs";
import { useTheme } from "./theme-provider-o93OQFIN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRcPIk2t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRoot, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTrigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPositioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPopup, {
			"data-slot": "dropdown-menu-content",
			className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function ThemeToggle() {
	const { setTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
		variant: "outline",
		size: "icon",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Toggle theme"
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => setTheme("light"),
				children: "Light"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => setTheme("dark"),
				children: "Dark"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => setTheme("system"),
				children: "System"
			})
		]
	})] });
}
function Avatar$1({ className, size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarRoot, {
		"data-slot": "avatar",
		"data-size": size,
		className: cn("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className),
		...props
	});
}
function AvatarImage({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full rounded-full object-cover", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
		"data-slot": "avatar-fallback",
		className: cn("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", className),
		...props
	});
}
function UserMeneToggle({ user }) {
	const handleSignOut = async () => {
		await authClient.signOut({ fetchOptions: {
			onSuccess: () => {
				toast.success("Signed out successfully");
			},
			onError: ({ error }) => {
				toast.error(error.message);
			}
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: "https://github.com/shadcn.png" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "CN" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "center",
		className: "w-46 space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Name: ", user?.user.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground",
					children: ["Email: ", user?.user.email?.toUpperCase().split("@")[0]]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {}), "Profile"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}), "Settings"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard",
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dashboard" })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: handleSignOut,
				variant: "destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), "Log out"]
			})
		]
	})] });
}
function Navbar() {
	const { data: session, isPending, refetch } = authClient.useSession();
	(0, import_react.useEffect)(() => {
		refetch();
	}, [refetch]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1727706673120",
					alt: "TanStack Start Logo",
					className: "size-8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-semibold",
					children: "CodeNonstop.Ai"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), isPending ? null : session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMeneToggle, { user: session }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: buttonVariants({
						variant: "secondary",
						className: "md:px-6 md:py-4.5"
					}),
					children: "Login"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: buttonVariants({ className: "px-4 py-4.5" }),
						children: "Get Started"
					})
				})] })]
			})]
		})
	});
}
var techStack = [
	{
		name: "TanStack Start",
		description: "Full-stack React framework with SSR and streaming",
		icon: Layers
	},
	{
		name: "TanStack Router",
		description: "Type-safe routing with file-based routes",
		icon: Braces
	},
	{
		name: "TanStack Form",
		description: "Powerful form management with validation",
		icon: BookOpen
	},
	{
		name: "Prisma + PostgreSQL",
		description: "Type-safe database access with modern ORM",
		icon: Database
	},
	{
		name: "Authentication",
		description: "Secure sessions with better-auth",
		icon: Lock
	},
	{
		name: "AI Integration",
		description: "Streaming AI responses with AI SDK",
		icon: Sparkles
	}
];
var features = [
	{
		title: "Import URLs",
		description: "Scrape web content with real-time streaming progress",
		icon: Globe,
		href: "/dashboard/import"
	},
	{
		title: "AI Summaries",
		description: "Generate intelligent summaries with streaming AI",
		icon: Sparkles,
		href: "/dashboard/items"
	},
	{
		title: "Discover Content",
		description: "Search the web and bulk import articles",
		icon: BookOpen,
		href: "/dashboard/discover"
	}
];
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-0 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-blob absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/30 opacity-70 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-blob animation-delay-2000 absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-500/30 opacity-70 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-blob animation-delay-4000 absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/30 opacity-70 blur-3xl" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), "Hands-on Tutorial Project"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl font-extrabold tracking-tight lg:text-6xl",
								children: [
									"Learn Full-Stack React with TanStack",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "Start"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl leading-relaxed text-muted-foreground",
								children: "Build a modern \"Read Later\" application from scratch. Master type-safe routing, database integration, authentication, and AI features."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-4 pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/signup",
									className: buttonVariants({
										size: "lg",
										className: "group relative overflow-hidden rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
									}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative z-10 flex items-center",
										children: ["Start Learning", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://tanstack.com/start/latest",
									target: "_blank",
									rel: "noopener noreferrer",
									className: buttonVariants({
										variant: "outline",
										size: "lg",
										className: "rounded-full px-8 transition-all duration-300 hover:scale-105"
									}),
									children: "Documentation"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mt-16 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto overflow-hidden rounded-xl border bg-card/50 p-1 shadow-2xl backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-purple-500/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-lg border bg-background p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-yellow-500/80" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-green-500/80" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "ml-4 flex-1 rounded-md bg-muted/50 px-3 py-1 text-xs text-muted-foreground",
										children: "localhost:3000/dashboard/items"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-32 rounded bg-muted/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-24 rounded-full bg-primary/20" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 md:grid-cols-2",
										children: [
											1,
											2,
											3,
											4
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border bg-card p-3 transition-all hover:border-primary/30",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mb-2 flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 rounded bg-primary/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-24 rounded bg-muted" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-full rounded bg-muted/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-3/4 rounded bg-muted/50" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 flex gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-12 rounded-full bg-primary/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-14 rounded-full bg-purple-500/10" })]
												})
											]
										}, i))
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-primary" }), "Core Features"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-3 text-3xl font-bold tracking-tight md:text-4xl",
								children: "What You'll Build"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto max-w-2xl text-muted-foreground",
								children: "A complete application showcasing modern web development patterns"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "group relative flex flex-col overflow-hidden border-transparent bg-card/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
							style: { animationDelay: `${index * 100}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-linear-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-px rounded-xl bg-card" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-purple-500/20 text-primary transition-transform duration-300 group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: "h-6 w-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											className: "text-xl",
											children: feature.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
											className: "text-sm",
											children: feature.description
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { className: "relative flex-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: feature.href,
										className: buttonVariants({
											variant: "outline",
											className: "w-full rounded-full"
										}),
										children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
									})
								})
							]
						}, feature.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative border-y bg-muted/30 px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-primary" }), "Tech Stack"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-3 text-3xl font-bold tracking-tight md:text-4xl",
								children: "Technologies You'll Master"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto max-w-2xl text-muted-foreground",
								children: "The modern stack that powers production applications"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: techStack.map((tech, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
							style: { animationDelay: `${index * 50}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-primary/10 to-purple-500/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-purple-500/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tech.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: tech.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: tech.description
								})] })]
							})]
						}, tech.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden px-4 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-green-500" }), "Free & Open Source"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 text-3xl font-bold tracking-tight md:text-4xl",
							children: "Ready to Start Building?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 text-lg text-muted-foreground",
							children: "Jump into the tutorial and build a real-world application from scratch. Learn by doing with practical, hands-on examples."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signup",
								className: buttonVariants({
									size: "lg",
									className: "group rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
								}),
								children: ["Create Account", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: buttonVariants({
									variant: "outline",
									size: "lg",
									className: "rounded-full px-8 transition-all duration-300 hover:scale-105"
								}),
								children: "Sign In"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-between gap-4 md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://tanstack.com/images/logos/logo-color-600.png",
								alt: "TanStack",
								className: "h-4 w-4"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built with TanStack Start" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://tanstack.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-foreground",
									children: "TanStack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://prisma.io",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-foreground",
									children: "Prisma"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://ui.shadcn.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-foreground",
									children: "shadcn/ui"
								})
							]
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { LandingPage as component };
