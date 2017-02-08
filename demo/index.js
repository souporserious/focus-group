var createFocusGroup = require('..');

var stateNodes = [].slice.call(document.querySelectorAll('.state'));
createFocusGroup({
	members: stateNodes,
	stringSearch: true,
}).activate();

var wraNodes = document.querySelectorAll('.wra');
createFocusGroup({
	members: wraNodes,
	stringSearch: true,
	keybindings: {
		next: [{ keyCode: 40 }, { keyCode: 39 }],
		prev: [{ keyCode: 38 }, { keyCode: 37 }],
		first: { keyCode: 74, metaKey: true },
		last: { keyCode: 75, metaKey: true }
	},
	wrap: true,
}).activate();

var selectRoot = document.getElementById('select-root');
var selectNodes = document.querySelectorAll('.select');
var focusGroup = createFocusGroup({
  rootNode: selectRoot,
	members: selectNodes,
	stringSearch: true,
	keybindings: {
		next: [{ keyCode: 40 }, { keyCode: 39 }],
		prev: [{ keyCode: 38 }, { keyCode: 37 }]
	},
	wrap: true,
}).activate();

focusGroup.on('focus', function (member) {
	for (var i = 0; i < selectNodes.length; i++) {
		var selectNode = selectNodes[i]
		selectNode.classList.toggle('highlighted', selectNode === member.node)
	}
})
