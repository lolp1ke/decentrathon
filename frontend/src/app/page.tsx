"use client";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

type UserData = {
	id: number;
	username?: string;

	first_name?: string;
	last_name?: string;

	language_code: string;

	is_premium?: boolean;
};

export default function page() {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		if (WebApp.initDataUnsafe.user) {
			setUserData(WebApp.initDataUnsafe.user as UserData);
		}
	}, []);

	return <>Premium?: {userData?.is_premium}</>;
}
