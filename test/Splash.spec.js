/* global describe, afterEach, test, expect */
/* eslint no-unused-vars: 0 */

import {
	fireEvent,
	cleanup,
	render,
} from '@testing-library/svelte'
import Splash from '../src/Splash.svelte'

describe('Splash', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Splash)
		expect(container).toMatchSnapshot()
	})

	test('trigger should work', async () => {
		const {getByText} = render(Splash)
		const button = getByText('Avançar')
		await fireEvent.click(button)
		expect(globalThis.localStorage.getItem('tadashi-splash-lgpd')).toMatchSnapshot()
	})

	test('reset should work', async () => {
		const {component} = render(Splash, {
			props: {
				show: true,
				verify: false,
			},
		})
		component.reset()
		component.titulo = 'test'
		expect(component.show).toMatchSnapshot()
	})
})
