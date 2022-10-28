import React from 'react';
export type ScreenOptions = {
	header?: () => React.ReactNode;
	headerShown?: boolean;
};

export type ScreenProps = Record<
	string,
	{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		component: React.FC<any>;
		options: ScreenOptions;
	}
>;

export const NoHeader: ScreenOptions = { header: (): React.ReactNode => null };
