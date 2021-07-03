let events = []

let stopFn = rrweb.record({
  emit(event) {
    console.log(event)
    events.push(event)
    if (events.length > 10) {
      stopFn()
    }
  },
})

function replay() {
  const wrappers = document.getElementsByClassName("rr-player")
  while (wrappers.length > 0) {
    wrappers[0].parentNode.removeChild(wrappers[0])
  }

  // const replayer = new rrweb.Replayer(events)
  // replayer.play()
  const component = new rrwebPlayer({
    target: document.body,
    data: {
      events,
      skipInactive: true,
      showDebug: false,
      showWarning: false,
      autoPlay: true,
      mouseTail: {
        strokeStyle: "blue",
      },
    },
  })

  window.$c = component
  component.addEventListener("finish", () => console.log("finish"))
}
