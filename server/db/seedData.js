const locations = [
  {
    location_id: 1,
    destination: "Barcelona to Paris",
    place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('41.385063,2.173404'),
    vibes: [ "shop", "party", "local"]
  },
  {
    location_id: 2,
    destination: "Asheville, North Carolina",
    place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.595058,-82.551487'),
    vibes: ["outdoors", "chill"]
  },
  {
    location_id: 3,
    destination: "Las Vegas, Nevada",
    place_id: "ChIJ0X31pIK3voARo3mz1ebVzDo",
    coord: ('36.1699,-115.1398'),
    vibes: ["party", "shop"]
  },
  {
    location_id: 4,
    destination: "Chicago, Illinois",
    place_id: "ChIJ7cv00DwsDogRAMDACa2m4K8",
    coord: ('41.8781,-87.6298'),
    vibes: ["local", "shop"]
  },
  {
    location_id: 5,
    destination: "Denver, Colorado",
    place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
    coord: ('39.7392,-104.9903'),
    vibes: ["outdoors", "shop"]
  },
  {
    location_id: 6,
    destination: "Key West, Florida",
    place_id: "ChIJGZPxxsW20YgRVe3uNrw1q-k",
    coord: ('24.5551,-81.7800'),
    vibes: ["party", "chill"]
  },
  {
    location_id: 7,
    destination: "New York City, New York",
    place_id: "ChIJOwg_06VPwokRYv534QaPC8g",
    coord: ('40.7128,-74.0060'),
    vibes: ["shop", "local"]
  },
  {
    location_id: 8,
    destination: "Los Angeles, California",
    place_id: "ChIJE9on3F3HwoAR9AhGJW_fL-I",
    coord: ('34.0522,-118.2437'),
    vibes: ["party", "shop"]
  },
  {
    location_id: 9,
    destination: "Omni Grove Park Inn - Country Club",
    place_id: "ChIJLb17W8f0WYgRpWXPmOh22Fk",
    destination_place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.619857,-82.542978')
  },
  {
    location_id: 10,
    destination: "Biltmore Forest Country Club",
    place_id: "ChIJdb2htJTyWYgRG4PVQhGknMY",
    destination_place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.532191,-82.536819')
  },
  {
    location_id: 11,
    destination: "Lake Lure Adventure Company",
    place_id: "ChIJ_xr5xelYV4gRc1TL7kMyiV0",
    destination_place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.423333,-82.186666')
  },
  {
    location_id: 12,
    destination: "Reems Creek Golf Club",
    place_id: "ChIJ3zMqbswfWogRUYZ0hyNgj58",
    destination_place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.698753,-82.520927')
  },
  {
    location_id: 13,
    destination: "Asheville Adventure Company",
    place_id: "ChIJ9289NOaMWYgRzGcX7_SMje4",
    destination_place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.566272,-82.586497')
  },
  {
    location_id: 14,
    destination: "Asheville Municipal Golf Course",
    place_id: "ChIJZ9il6JPzWYgR1cUrYlcprbw",
    destination_place_id: "ChIJCW8PPKmMWYgRXTo0BsEx75Q",
    coord: ('35.5783,-82.500883')
  },
  {
    location_id: 15,
    destination: "Eiffel Tower",
    place_id: "ChIJLU7jZClu5kcR4PcOOO6p3I0",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('48.858844,2.294351')
  },
  {
    location_id: 16,
    destination: "La Barceloneta Beach",
    place_id: "ChIJk1xgCQejpBIRUvCCQOH6ACY",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('41.3784,2.1925')
  },
  {
    location_id: 17,
    destination: "Montpellier Botanical Garden",
    place_id: "ChIJuaew9wavthIRVF6Rv-gqcSE",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('43.3643,3.5238')
  },
  {
    location_id: 18,
    destination: "Palais des Papes",
    place_id: "ChIJb_jbjobrtRIRy9KIwWXljHc",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('43.9509,4.8077')
  },
  {
    location_id: 19,
    destination: "Basilica of Notre Dame of Fourvière",
    place_id: "ChIJK1Jxdanr9EcRKY5nG3nMG50",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('45.7623,4.8226')
  },
  {
    location_id: 20,
    destination: "Louvre Museum",
    place_id: "ChIJD3uTd9hx5kcR1IQvGfr8dbk",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('48.8606,2.3376')
  },
  {
    location_id: 21,
    destination: "La Boqueria Market",
    place_id: "ChIJAVoetfeipBIR1a1z3FTGCoY",
    destination_place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
    coord: ('41.3819,2.1717')
  },

  {
    location_id: 22,
    destination: "The Forum Shops at Caesars Palace",
    place_id: "ChIJSfBqxTzEyIARuYjvD1pecJ8",
    destination_place_id: "ChIJ0X31pIK3voARo3mz1ebVzDo",
    coord: ('36.1189939,-115.2174111')
  },

  {
    location_id: 23,
    destination: "XS Nightclub",
    place_id: "ChIJb7Qe8RTEyIARqt7WfhoTKPY",
    destination_place_id: "ChIJ0X31pIK3voARo3mz1ebVzDo",
    coord: ('36.1270805,-115.2061127')
  },

  {
    location_id: 24,
    destination: "The LINQ Promenade",
    place_id: "ChIJd1tXQznEyIAR6hB3hvz06RY",
    destination_place_id: "ChIJ0X31pIK3voARo3mz1ebVzDo",
    coord: ('36.1270805,-115.2061127')
  },

  {
    location_id: 25,
    destination: "Wicker Park",
    place_id: "ChIJTVle-sbSD4gRnXE7zWH7kkU",
    destination_place_id: "ChIJ7cv00DwsDogRAMDACa2m4K8",
    coord: ('41.6764342,-89.1990669')
  },
  {
    location_id: 26,
    destination: "Andersonville",
    place_id: "ChIJrwSWvojRD4gRMJiiFShC3R4",
    destination_place_id: "ChIJ7cv00DwsDogRAMDACa2m4K8",
    coord: ('41.98192,-87.66830')
  },
  {
    location_id: 27,
    destination: "Lincoln Square",
    place_id: "ChIJOQwghALSD4gRPZgJcaYbnmY",
    destination_place_id: "ChIJ7cv00DwsDogRAMDACa2m4K8",
    coord: ('41.96937,-87.68867')
  },
  {
    location_id: 28,
    destination: "Cherry Creek Shopping Center",
    place_id: "ChIJX4Jmj5B-bIcR48cSaPW_jR0",
    destination_place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
    coord: ('39.71734,-104.95216')
  },
  {
    location_id: 29,
    destination: "Red Rocks Park and Amphitheatre",
    place_id: "ChIJ18hsDtqCa4cRrdYsOQfng3w",
    destination_place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
    coord: ('39.66551,-105.20540')
  },
  {
    location_id: 30,
    destination: "16th Street Mall",
    place_id: "ChIJHY5jhNp4bIcRN013V1sn9Ug",
    destination_place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
    coord: ('39.74826,-104.99463')
  },
  {
    location_id: 31,
    destination: "Duval Street",
    place_id: "EiFEdXZhbCBTdCwgS2V5IFdlc3QsIEZMIDMzMDQwLCBVU0EiLiosChQKEgmHXBXO6bbRiBGhSA43NRlsuBIUChIJdyOVrTSx0YgRXjtGdy_pzj8",
    destination_place_id: "ChIJGZPxxsW20YgRVe3uNrw1q-k",
    coord: ('24.56270,-81.80857')
  },
  {
    location_id: 32,
    destination: "Mallory Square",
    place_id: "ChIJFYVni-y20YgRB3LW82ZY4bw",
    destination_place_id: "ChIJGZPxxsW20YgRVe3uNrw1q-k",
    coord: ('24.56268,-81.81589')
  },
  {
    location_id: 33,
    destination: "Smathers Beach",
    place_id: "ChIJYxGtrzGx0YgRO0FndRyfyLs",
    destination_place_id: "ChIJGZPxxsW20YgRVe3uNrw1q-k",
    coord: ('24.55219,-81.76857')
  },
  {
    location_id: 34,
    destination: "Little Market NYC",
    place_id: "ChIJw2lMFL9ZwokRosAtly52YX4",
    destination_place_id: "ChIJc3w6RtlZwokRurBBrgR0PcI",
    coord: ('40.72340,-74.00326')
  },
  {
    location_id: 35,
    destination: "Greenwich Village",
    place_id: "ChIJpxMyDJRZwokRX0XfgiHEgog",
    destination_place_id: "ChIJOwg_06VPwokRYv534QaPC8g",
    coord: ('40.74862,-73.89170')
  },
  {
    location_id: 36,
    destination: "Melrose Avenue",
    place_id: "EiFNZWxyb3NlIEF2ZSwgTG9zIEFuZ2VsZXMsIENBLCBVU0EiLiosChQKEgl9KOCx07jCgBG4KPB94SvDnBIUChIJE9on3F3HwoAR9AhGJW_fL-I",
    destination_place_id: "ChIJE9on3F3HwoAR9AhGJW_fL-I",
    coord: ('41.735167,-93.5711476')
  },
  {
    location_id: 37,
    destination: "Sunset Strip",
    place_id: "ChIJb-baHr2-woARBkWdGpP-CRQ",
    destination_place_id: "ChIJE9on3F3HwoAR9AhGJW_fL-I",
    coord: ('34.09128,-118.37977')
  },
];

module.exports = {
  locations
};