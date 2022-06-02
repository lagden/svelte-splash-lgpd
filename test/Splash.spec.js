/* globals describe, afterEach, beforeAll, afterAll, test, expect */

import timekeeper from 'timekeeper'
import '@testing-library/jest-dom'
import {
	fireEvent,
	cleanup,
	render,
} from '@testing-library/svelte'
import Splash from '../src/Splash.svelte'

beforeAll(() => {
	// Para o tempo
	timekeeper.freeze(1_604_416_038 * 1000)
})

afterAll(() => {
	timekeeper.reset()
})

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
