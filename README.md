# thunkApp

### Running the App

1. Clone the app.
2. In your terminal, navigate to the app's root directory.
3. Run `yarn ios` to run the app in your iPhone simulator.

### What I did

I created this repo using expo init. My work from there was in the assets, components and utils folders, plus App.tsx and types.tsx.
I focused on making my code clean and readable while making reusable components organized along atomic design principles and defining expected props with TypeScript.
I was able to build the basic app from the designs, but stopped short of implementing the drag and drop feature. I gave React Native Draggable Flatlist a quick try, but hit a few snags that made me think it wouldn't be possible in the time I set aside.
I didn't think the app had a good reason to use global state management like Redux.

### UI/UX thinking

I don't feel like I cut loose too much as far as design goes. But, if I were to press myself, I would probably design around the creation of new projects in the list.
I could have made the button give some kind of visible feedback to the user on press, the new list item could come up from the bottom rather than just instantly appear, maybe the beaver could wink at the user?
Now that I think about it, there should be something on the screen even when there are no projects in the list. Just a welcome message telling you what this is all about.

### Highlights

The highlight of development came near the end when I clicked the addProject button a few times and the app created about 35 list items and everytime I pressed a key the ScrollView jumped around randomly. There were also 37 warnings saying there were elements with the same key. I'm not sure exactly why so many items were created, but incrementing the updates variable used to determine their keys fixed that, while setting autofocus to true only for the last item in the list fixed the typing issue.