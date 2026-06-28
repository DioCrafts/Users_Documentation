# Geospatial & maps

The **Geospatial** module puts your data on a map: where things are, how they move,
and what patterns that movement reveals. It's built around vessels and ports, but the
ideas apply to anything that has a location and a track.

## The map

![The Geospatial map with the layers panel and latest positions](/images/map-overview.png)
*The map: vessels and ports with a layers panel and the most recent positions.*

Open **Geospatial**. You'll see a map with markers for vessels (shown as heading
arrows pointing the way they're travelling) and ports/facilities (shown as
diamonds). High-risk objects get a soft halo. Selecting an object draws its **track**
— the path it has taken.

Two display modes:

- **Schematic** — a clean, stylised map, always available.
- **Real** — a true geographic map with live tiles, when your workspace has it
  enabled. Switch with the **globe** button.

### Getting around

- **Click** a marker to select it (details appear in the side panel).
- **Double-click** (or press **Enter**) to open its [360° profile](/guide/objects).
- **Zoom in / out** and **fit-to-data** controls sit on the map; **arrow keys** move
  between markers.
- A heads-up readout shows the most recent position time and how many vessels and
  ports are in view.

### Layers

A **Layers** panel lets you toggle what's drawn:

- **Vessels** and **Ports** on/off,
- **Risk zones** (halos around high-risk objects),
- **Track** (the selected object's path),
- **Heatmap** (density of activity, on the real map).

### Saved views

Save a named map view — your selection, layers, mode, and camera position — and
restore it later, just like on the [graph](/guide/graph).

## Replaying movement over time

Select an object with a track and turn on **Temporal analysis** (the clock button). A
scrubber appears at the bottom. Drag it to move the object to its position at any
moment, watching the track build up as you go. Press **play** to animate it. This is
how you replay a journey and pinpoint exactly when something happened.

## Reading a track: trajectory metrics

When an object is selected, the side panel summarises its movement:

- **Average** and **maximum speed**,
- **Distance** travelled,
- **Stops** (how many, and how long),
- **Home port** (most-visited),
- an **anomaly** score — how unusual the movement is overall (high values are
  flagged in red).

## Detections (movement anomalies)

AXIOM watches for suspicious behaviour and lists **detections** for the selected
object, each with a confidence score. Types include:

| Detection | Means… |
|---|---|
| **Zone entry / exit** | Entered or left a watched area |
| **Dwell** | Stayed put in one place for a long time |
| **AIS gap** | Stopped broadcasting its position for a stretch (a classic sign of "going dark") |
| **Rendezvous** | Met another vessel at sea and stayed close |
| **Loitering** | Circled or drifted with no clear destination |
| **Spoofing** | Reported a position that looks faked |

Some detections are **suppressed** when AXIOM judges them likely false alarms; you
can still show them if you want the full picture.

## Co-travel and formations

- **Co-travel** lists vessels that travelled close to the selected one — with the
  closest distance they came, how long they ran together, and a confidence score.
  Pairs that move together are often operationally linked.
- **Formations** finds coordinated groups of three or more vessels travelling
  together, with a cohesion score and the members listed.

From either, **Open in graph** bridges to the [graph](/guide/graph) to explore the
wider relationships (ownership, finances, common operators).

## The detection feed (cross-fleet)

A feed lists detections across *all* objects, not just the selected one. Filter it by
detection type, set a minimum confidence, and choose whether to include suppressed
ones. Click any detection to jump to the object on the map, or open its full profile.
This is the place to triage movement anomalies at scale.

## Watched zones and occupancy

Define an area to watch:

1. Pan/zoom the map to frame the area.
2. Type a name and click **From view** to create a zone from the current view.
3. The zone immediately shows how many vessels are inside it.

Refresh to update occupancy as vessels come and go; administrators can delete zones.
Entering or leaving a watched zone shows up as a *Zone entry/exit* detection.

## Governed area search

Some searches are sensitive enough to need a second person's sign-off. **Area
search** lets you request the objects within a map area for a stated **purpose** — but
the results stay hidden until a separate, cleared colleague approves the request:

1. Frame the area on the map, write a **purpose**, and **Request focused area**. The
   request is now *pending approval* and shows no results yet.
2. Share the request's identifier with an approver.
3. The approver reviews the purpose and clicks **Approve** (or **Deny**).
4. On approval, the objects in the area are released and listed — click any to open
   its profile.

This keeps area-wide sweeps purposeful and accountable.

## Recipes

**Confirm a rendezvous.**
Open the detection feed → filter to **Rendezvous** → click a high-confidence one →
the two vessels appear on the map → check the **Co-travel** panel for how close and
how long → **Open in graph** to see the relationship.

**Find dark activity.**
Select a vessel → notice a high **anomaly** score and an **AIS gap** detection → turn
on **Temporal analysis** → scrub the track to find the gap → compare its timing with
the vessel's port calls in its profile.

**Watch a chokepoint.**
Frame a strait or port on the map → name a zone → **From view** → the occupancy count
appears → refresh periodically; new arrivals also raise *Zone entry* detections.

**Run a governed area sweep.**
Frame the area → write a clear **purpose** → **Request focused area** → send the
request id to a cleared colleague → they **Approve** → review the released objects.
