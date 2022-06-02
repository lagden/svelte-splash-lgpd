import {TestEnvironment} from 'jest-environment-jsdom'

class CustomTestEnvironment extends TestEnvironment {
	async setup() {
		await super.setup()
		this.global.document.body.scrollIntoView = () => {}
		this.global.Element.prototype.scrollIntoView = () => {}
	}
}

export default CustomTestEnvironment
