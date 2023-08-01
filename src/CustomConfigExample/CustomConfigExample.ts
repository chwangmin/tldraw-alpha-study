// import { Tldraw, track, useEditor } from '@tldraw/tldraw'
// import '@tldraw/tldraw/tldraw.css'
// import { CardShapeTool } from './CardShape/CardShapeTool'
// import { CardShapeUtil } from './CardShape/CardShapeUtil'
// import { uiOverrides } from './ui-overrides'
// import { useYjsStore } from '../yjs/useYjsStore'

// const customShapeUtils = [CardShapeUtil]
// const customTools = [CardShapeTool]

// const HOST_URL =
// 	process.env.NODE_ENV === 'development' ? 'ws://localhost:1234' : 'wss://demos.yjs.dev'


// export default function CustomConfigExample() {
// 	const store = useYjsStore({
// 		roomId: 'example6',
// 		hostUrl: HOST_URL,
// 	})
// 	return (
// 		<div className="tldraw__editor">
// 			<Tldraw
// 				store={store} 
// 				shareZone={<NameEditor />}
// 				autoFocus
// 				// Pass in the array of custom shape classes
// 				shapeUtils={customShapeUtils}
// 				// Pass in the array of custom tool classes
// 				tools={customTools}
// 				// Pass in any overrides to the user interface
// 				overrides={uiOverrides}
// 			/>
// 		</div>
// 	)
// }

// const NameEditor = track(() => {
// 	const editor = useEditor()

// 	const { color, name } = editor.user

// 	return (
// 		<div style={{ pointerEvents: 'all', display: 'flex' }}>
// 			<input
// 				type="color"
// 				value={color}
// 				onChange={(e) => {
// 					editor.user.updateUserPreferences({
// 						color: e.currentTarget.value,
// 					})
// 				}}
// 			/>
// 			<input
// 				value={name}
// 				onChange={(e) => {
// 					editor.user.updateUserPreferences({
// 						name: e.currentTarget.value,
// 					})
// 				}}
// 			/>
// 		</div>
// 	)
// })