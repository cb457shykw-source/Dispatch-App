import type { Lang, Trades } from '../types';

export interface Strings {
  t_tomorrow: string;
  t_today: string;
  t_tabBoard: string;
  t_tabAcks: string;
  t_tabRoster: string;
  t_tabMe: string;
  t_tabToday: string;
  t_tabWeek: string;
  t_tabPhotos: string;
  t_poolCrew: string;
  t_pourShort: string;
  t_reportShort: string;
  t_unassigned: string;
  t_assignCrew: string;
  t_selectCrew: string;
  t_cancel: string;
  t_overview: string;
  t_filesShort: string;
  t_crew: string;
  t_files: string;
  t_pourTime: string;
  t_reportTime: string;
  t_supplier: string;
  t_supplierName: string;
  t_plant: string;
  t_dispatchPhone: string;
  t_interval: string;
  t_mix: string;
  t_order: string;
  t_weather: string;
  t_slump: string;
  t_notes: string;
  t_directions: string;
  t_call: string;
  t_callSupplier: string;
  t_seeAcks: string;
  t_pending: string;
  t_nudge: string;
  t_swap: string;
  t_gated: string;
  t_roster: string;
  t_available: string;
  t_off: string;
  t_role: string;
  t_canDispatch: string;
  t_canDispatchNote: string;
  t_language: string;
  t_langNote: string;
  t_thisWeek: string;
  t_myWeek: string;
  t_stages: string;
  t_done: string;
  t_tasks: string;
  t_noPour: string;
  t_newAssignment: string;
  t_accept: string;
  t_reportDelay: string;
  t_addPhoto: string;
  t_photos: string;
  t_whatHappened: string;
  t_howLong: string;
  t_sendToDispatch: string;
  t_delayNote: string;
  t_delaySentTitle: string;
  t_notified: string;
  t_notifiedWho: string;
  t_backToToday: string;
  t_siteMap: string;
  t_placeholder: string;
  t_sitePhoto: string;
  t_ackHint: string;
  t_weekHint: string;
  t_pushSent: string;
  t_calling: string;
  t_opening: string;
  t_callingSupplier: string;
  t_opened: string;
  roles: string[];
  stages: string[];
  reasons: string[];
  lengths: string[];
  boardHint: string;
  photoSub: string;
  delaySub: string;
  rosterSummary: string;
  workLabels: { cg: string; sw: string };
  trades: Trades;
  days: string[];
  whats: string[];
}

export const T: Record<Lang, Strings> = {
  en: {
    t_tomorrow: 'Tomorrow · Tue Aug 25',
    t_today: 'Today · Mon Aug 24',
    t_tabBoard: 'Board',
    t_tabAcks: 'Accepted',
    t_tabRoster: 'Crews',
    t_tabMe: 'Me',
    t_tabToday: 'Today',
    t_tabWeek: 'Week',
    t_tabPhotos: 'Photos',
    t_poolCrew: 'New crew from available pool',
    t_pourShort: 'Pour',
    t_reportShort: 'Report',
    t_unassigned: 'Needs a crew',
    t_assignCrew: 'Assign crew',
    t_selectCrew: 'Select a crew',
    t_cancel: 'Cancel',
    t_overview: 'Overview',
    t_filesShort: 'Files',
    t_crew: 'Crew',
    t_files: 'Project files',
    t_pourTime: 'Placement time',
    t_reportTime: 'Report',
    t_supplier: 'Concrete supply',
    t_supplierName: 'Supplier',
    t_plant: 'Plant',
    t_dispatchPhone: 'Dispatch',
    t_interval: 'Truck interval',
    t_mix: 'Mix design',
    t_order: 'Order no.',
    t_weather: 'Weather',
    t_slump: 'Slump',
    t_notes: 'Notes',
    t_directions: 'Directions',
    t_call: 'Call site contact',
    t_callSupplier: 'Call supplier dispatch',
    t_seeAcks: 'See who has accepted',
    t_pending: 'Pending',
    t_nudge: 'Resend',
    t_swap: 'Swap a crew member',
    t_gated:
      'Assignment is limited to Owner and Dispatcher roles. Ask the office to change the crew on this job.',
    t_roster: 'Crew roster',
    t_available: 'Available',
    t_off: 'Off',
    t_role: 'Role',
    t_canDispatch: 'Can dispatch',
    t_canDispatchNote: 'Assign crews and edit the board',
    t_language: 'Language',
    t_langNote: 'Saved to this person. Every notification is sent in their language.',
    t_thisWeek: 'This week',
    t_myWeek: 'My week',
    t_stages: 'Job stages',
    t_done: 'Done',
    t_tasks: "Today's tasks",
    t_noPour: 'no placement',
    t_newAssignment: 'New assignment',
    t_accept: 'Accept assignment',
    t_reportDelay: 'Report a delay',
    t_addPhoto: 'Add photo',
    t_photos: 'Job photos',
    t_whatHappened: 'What is holding you up?',
    t_howLong: 'How long',
    t_sendToDispatch: 'Send to dispatch',
    t_delayNote: 'Dispatch and the supplier are notified at the same time.',
    t_delaySentTitle: 'Dispatch has been notified',
    t_notified: 'Notified',
    t_notifiedWho: 'R. Lehti (foreman) · Office dispatch',
    t_backToToday: 'Back to today',
    t_siteMap: 'Site map',
    t_placeholder: 'placeholder',
    t_sitePhoto: 'Site photo',
    t_ackHint: 'A job with no acceptances by 6:00 PM is flagged red.',
    t_weekHint: 'Assignments are published the evening before.',
    t_pushSent: 'Push notification sent',
    t_calling: 'Calling site contact…',
    t_opening: 'Opening in Maps…',
    t_callingSupplier: 'Calling Cadman dispatch…',
    t_opened: 'Opening file…',
    roles: ['Owner', 'Dispatcher', 'Foreman', 'Crew'],
    stages: ['Grade / excavate', 'Form', 'Pour', 'Finish', 'Cure', 'Strip forms'],
    reasons: ['Late concrete truck', 'Weather', 'Site not ready', 'Equipment down'],
    lengths: ['30 min', '1 hr', '2 hr+', 'All day'],
    boardHint: "Tap a job to open it. Assignments push to every crew member at once.",
    photoSub: 'Attached to Shoultes Elementary · visible to dispatch',
    delaySub: 'Shoultes Elementary · placement 7:30 AM',
    rosterSummary: '50 employees · 3 crews',
    workLabels: { cg: 'Curb & gutter', sw: 'Sidewalk' },
    trades: {
      foreman: 'Foreman',
      finisher: 'Finisher',
      laborer: 'Laborer',
      operator: 'Operator',
      formsetter: 'Form setter',
    },
    days: ['Mon 24', 'Tue 25', 'Wed 26', 'Thu 27', 'Fri 28'],
    whats: ['Strip forms', 'Placement', 'Form', 'Placement', 'Backfill'],
  },
  es: {
    t_tomorrow: 'Mañana · mar 25 ago',
    t_today: 'Hoy · lun 24 ago',
    t_tabBoard: 'Tablero',
    t_tabAcks: 'Aceptado',
    t_tabRoster: 'Personal',
    t_tabMe: 'Yo',
    t_tabToday: 'Hoy',
    t_tabWeek: 'Semana',
    t_tabPhotos: 'Fotos',
    t_poolCrew: 'Cuadrilla nueva del personal disponible',
    t_pourShort: 'Colada',
    t_reportShort: 'Entrada',
    t_unassigned: 'Falta cuadrilla',
    t_assignCrew: 'Asignar cuadrilla',
    t_selectCrew: 'Seleccione una cuadrilla',
    t_cancel: 'Cancelar',
    t_overview: 'Resumen',
    t_filesShort: 'Archivos',
    t_crew: 'Cuadrilla',
    t_files: 'Archivos del proyecto',
    t_pourTime: 'Hora de colocación',
    t_reportTime: 'Entrada',
    t_supplier: 'Suministro de concreto',
    t_supplierName: 'Proveedor',
    t_plant: 'Planta',
    t_dispatchPhone: 'Despacho',
    t_interval: 'Intervalo de camiones',
    t_mix: 'Diseño de mezcla',
    t_order: 'Pedido n.º',
    t_weather: 'Clima',
    t_slump: 'Revenimiento',
    t_notes: 'Notas',
    t_directions: 'Indicaciones',
    t_call: 'Llamar al contacto',
    t_callSupplier: 'Llamar al despacho del proveedor',
    t_seeAcks: 'Ver quién ha aceptado',
    t_pending: 'Pendiente',
    t_nudge: 'Reenviar',
    t_swap: 'Cambiar un integrante',
    t_gated: 'Solo los roles Dueño y Despachador pueden asignar. Pida a la oficina cambiar la cuadrilla.',
    t_roster: 'Personal',
    t_available: 'Disponible',
    t_off: 'Libre',
    t_role: 'Rol',
    t_canDispatch: 'Puede despachar',
    t_canDispatchNote: 'Asignar cuadrillas y editar el tablero',
    t_language: 'Idioma',
    t_langNote: 'Se guarda por persona. Cada aviso se envía en su idioma.',
    t_thisWeek: 'Esta semana',
    t_myWeek: 'Mi semana',
    t_stages: 'Etapas de la obra',
    t_done: 'Listo',
    t_tasks: 'Tareas de hoy',
    t_noPour: 'sin colocación',
    t_newAssignment: 'Nueva asignación',
    t_accept: 'Aceptar asignación',
    t_reportDelay: 'Reportar retraso',
    t_addPhoto: 'Agregar foto',
    t_photos: 'Fotos de la obra',
    t_whatHappened: '¿Qué los está deteniendo?',
    t_howLong: 'Cuánto tiempo',
    t_sendToDispatch: 'Enviar a despacho',
    t_delayNote: 'Se avisa al despacho y al proveedor al mismo tiempo.',
    t_delaySentTitle: 'Despacho ha sido notificado',
    t_notified: 'Notificados',
    t_notifiedWho: 'R. Lehti (capataz) · Despacho de oficina',
    t_backToToday: 'Volver a hoy',
    t_siteMap: 'Mapa del sitio',
    t_placeholder: 'provisional',
    t_sitePhoto: 'Foto del sitio',
    t_ackHint: 'Una obra sin aceptaciones a las 6:00 PM se marca en rojo.',
    t_weekHint: 'Las asignaciones se publican la tarde anterior.',
    t_pushSent: 'Aviso enviado',
    t_calling: 'Llamando al contacto…',
    t_opening: 'Abriendo en Mapas…',
    t_callingSupplier: 'Llamando al despacho de Cadman…',
    t_opened: 'Abriendo archivo…',
    roles: ['Dueño', 'Despachador', 'Capataz', 'Cuadrilla'],
    stages: ['Excavar / nivelar', 'Encofrar', 'Colocar', 'Acabado', 'Curado', 'Retirar encofrado'],
    reasons: ['Camión de concreto atrasado', 'Clima', 'Sitio no listo', 'Equipo averiado'],
    lengths: ['30 min', '1 hr', '2 hr+', 'Todo el día'],
    boardHint: 'Toque una obra para abrirla. La asignación se envía a toda la cuadrilla a la vez.',
    photoSub: 'Adjuntas a Shoultes Elementary · visibles para despacho',
    delaySub: 'Shoultes Elementary · colocación 7:30 AM',
    rosterSummary: '50 empleados · 3 cuadrillas',
    workLabels: { cg: 'Bordillo y cuneta', sw: 'Acera' },
    trades: {
      foreman: 'Capataz',
      finisher: 'Acabador',
      laborer: 'Peón',
      operator: 'Operador',
      formsetter: 'Encofrador',
    },
    days: ['lun 24', 'mar 25', 'mié 26', 'jue 27', 'vie 28'],
    whats: ['Retirar encofrado', 'Colocación', 'Encofrar', 'Colocación', 'Rellenar'],
  },
};
