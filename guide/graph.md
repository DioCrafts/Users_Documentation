# Graph & link analysis

The **Graph** turns a list of records into a network you can see and reason about.
Drop in an entity, pull in its connections, rearrange the layout, and let AXIOM
compute the paths, common contacts, and key players for you.

There are three related views: the **interactive Graph** for building and exploring a
network, **Graph Analysis** for running algorithms, and **Linked analysis** for
seeing one selection across several panels at once.

## The interactive Graph

![The interactive graph with a selected node and its inspector](/images/graph-overview.png)
*The graph canvas: select a node to inspect its connections, then expand outward.*

Open **Graph**. You'll see a canvas of **nodes** (objects, as coloured circles with
their names) joined by **links** (labelled lines). Around it: a toolbar, a legend of
the types present, a minimap, and an inspector panel for whatever you select.

### Moving around

| Do this | To… |
|---|---|
| **Drag** the empty canvas | Pan |
| **Scroll** | Zoom |
| **Drag** a node | Reposition it |
| **Click** a node | Select it (details appear in the inspector) |
| **Double-click** a node | Pull in its neighbours (or open its profile) |
| **Arrow keys** | Move between nodes; **Enter** activates, **Esc** clears |

The toolbar adds **Zoom in/out**, **Fit** (frame everything), **Labels** on/off,
**Auto-arrange** (untangle the layout automatically), and **Save layout** (remember
your arrangement).

### Building a network

- **Search & focus.** For a large network, start by searching for an entity to seed
  the view, then grow outward. (Very large graphs open in *focus mode* so you don't
  get an unreadable hairball — search for a starting point, or choose to show the
  whole thing.)
- **Expand a node.** Select a node and use **Expand neighbourhood** (or double-click)
  to fetch and add its connections.
- **Filter by type.** Click a type in the legend to show or hide all nodes of that
  type, so you can focus on, say, only vessels.
- **From the inspector**, you can also **Watch** the selected object, **Add** a
  connection from it to another object, or open its full
  [360° profile](/guide/objects).

### Time and saved views

- **Temporal / Time travel.** Turn these on to filter the network by when nodes
  appeared, or to view it as it stood at a past date. A scrubber lets you sweep
  through a time window. See
  [Core concepts](/guide/concepts#looking-back-in-time-bitemporal-history).
- **Saved views.** Save the whole exploration — your seeds, filters, zoom, and layout
  — under a name, and restore it later. A graph can have many saved views for
  different angles on the same data.

## Graph Analysis: paths, common contacts, centrality

Open **Graph Analysis** (a lens of Graph) to run three algorithms. Pick a mode, then
click nodes on the canvas:

- **Shortest path.** Pick two nodes; AXIOM traces the shortest chain of links between
  them and tells you the number of hops. If there's no path, it says so.
- **Common connections.** Pick two nodes; AXIOM lists every entity they both connect
  to — great for finding shared intermediaries.
- **Centrality.** AXIOM ranks every node by how central it is to the network. The
  most connected, most "between" nodes rise to the top and appear larger on the
  canvas.

If a network is very large, AXIOM may analyse a bounded slice for speed and tell you
so. You can **scope the analysis to a node's neighbourhood** for exact results on a
smaller, more focused subgraph.

## Linked analysis (coordinated panels)

Open **Linked analysis** to see one selection reflected across **four panels at
once**: a connection graph, a map, a table, and a timeline. Hover or click an entity
in any panel and it highlights in all four — so you grasp its relationships, its
location, and when it appeared, together. Watched and high-risk objects stand out
visually in every panel.

## Recipes

**Map the network around a key entity.**
Open Graph → **search** for the entity → it's seeded at the centre with its
neighbours → double-click interesting nodes to expand further → **Auto-arrange** to
tidy up → **Save layout**.

**Find how two suspects are connected.**
Open Graph Analysis → **Shortest path** mode → click suspect A, then suspect B → read
the chain of intermediaries and the hop count.

**Find who two parties have in common.**
Graph Analysis → **Common connections** mode → click the two entities → review the
shared contacts as leads.

**Find the most important player.**
Graph Analysis → **Centrality** mode → the ranking lists the most central entities;
the biggest nodes on the canvas are the ones to look at first.

**See an entity from every angle at once.**
Open Linked analysis → click an entity in the table → watch it light up on the graph,
the map, and the timeline simultaneously.
