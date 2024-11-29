"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ac } from "@/lib/auth-client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function SignIn({ successCb }: { successCb?: (success: boolean) => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (

        <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                />
            </div>

            <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">密码</Label>
                    <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                    >
                        忘记密码了吗?
                    </Link>
                </div>

                <Input
                    id="password"
                    type="password"
                    placeholder="密码"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="remember"
                    onClick={() => {
                        setRememberMe(!rememberMe);
                    }}
                />
                <Label htmlFor="remember">记住我</Label>
            </div>



            <Button
                type="submit"
                className="w-full"
                disabled={loading}
                onClick={async () => {
                    setLoading(true);
                    const res = await ac.signIn.email({ email, password });
                    if (res.error) {
                        toast.error(res.error.message);
                    } else {
                        toast.success("登录成功");
                        successCb?.(true);
                    }
                    setLoading(false);
                }}
            >
                {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                ) : (
                    "登录"
                )}
            </Button>



            <div className={cn(
                "w-full gap-2 flex items-center",
                "justify-between flex-col"
            )}>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full gap-2"
                    )}
                    onClick={async () => {
                        await ac.signIn.social({
                            provider: "google",
                            callbackURL: "/dashboard"
                        });
                    }}
                >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                        <path
                            fill="currentColor"
                            d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z"
                        ></path>
                    </svg>
                    使用 Google 账号登录
                </Button><Button
                    variant="outline"
                    className={cn(
                        "w-full gap-2"
                    )}
                    onClick={async () => {
                        await ac.signIn.social({
                            provider: "github",
                            callbackURL: "/dashboard"
                        });
                    }}
                >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                        <path
                            fill="currentColor"
                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                        ></path>
                    </svg>
                    使用 GitHub 账号登录
                </Button><Button
                    variant="outline"
                    className={cn(
                        "w-full gap-2"
                    )}
                    onClick={async () => {
                        await ac.signIn.social({
                            provider: "discord",
                            callbackURL: "/"
                        });
                    }}
                >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                        />
                    </svg>
                    使用 Discord 账号登录
                </Button>
            </div>
        </div>
    );
}