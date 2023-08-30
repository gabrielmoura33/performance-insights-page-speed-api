/* eslint-disable no-use-before-define */
export interface PageSpeedInsightAudit {
  'lcp-lazy-loaded': LcpLazyLoaded
  'uses-text-compression': UsesTextCompression
  'third-party-facades': ThirdPartyFacades
  diagnostics: Diagnostics
  'no-document-write': NoDocumentWrite
  redirects: Redirects
  'non-composited-animations': NonCompositedAnimations
  'unsized-images': UnsizedImages
  interactive: Interactive
  'uses-passive-event-listeners': UsesPassiveEventListeners
  'layout-shift-elements': LayoutShiftElements
  'font-display': FontDisplay
  'uses-responsive-images': UsesResponsiveImages
  metrics: Metrics
  'prioritize-lcp-image': PrioritizeLcpImage
  'bootup-time': BootupTime
  'uses-optimized-images': UsesOptimizedImages
  'script-treemap-data': ScriptTreemapData
  'uses-rel-preload': UsesRelPreload
  'offscreen-images': OffscreenImages
  'unminified-css': UnminifiedCss
  'first-meaningful-paint': FirstMeaningfulPaint
  'network-rtt': NetworkRtt
  viewport: Viewport
  'render-blocking-resources': RenderBlockingResources
  'cumulative-layout-shift': CumulativeLayoutShift
  'unused-javascript': UnusedJavascript
  'largest-contentful-paint': LargestContentfulPaint
  'long-tasks': LongTasks
  'performance-budget': PerformanceBudget
  'uses-rel-preconnect': UsesRelPreconnect
  'critical-request-chains': CriticalRequestChains
  'screenshot-thumbnails': ScreenshotThumbnails
  'network-requests': NetworkRequests
  'speed-index': SpeedIndex
  'timing-budget': TimingBudget
  'mainthread-work-breakdown': MainthreadWorkBreakdown
  'server-response-time': ServerResponseTime
  'total-byte-weight': TotalByteWeight
  'network-server-latency': NetworkServerLatency
  'first-contentful-paint': FirstContentfulPaint
  'third-party-summary': ThirdPartySummary
  'user-timings': UserTimings
  'duplicated-javascript': DuplicatedJavascript
  'largest-contentful-paint-element': LargestContentfulPaintElement
  'efficient-animated-content': EfficientAnimatedContent
  'unminified-javascript': UnminifiedJavascript
  'uses-long-cache-ttl': UsesLongCacheTtl
  'max-potential-fid': MaxPotentialFid
  'legacy-javascript': LegacyJavascript
  'unused-css-rules': UnusedCssRules
  'dom-size': DomSize
  'modern-image-formats': ModernImageFormats
  'total-blocking-time': TotalBlockingTime
  'final-screenshot': FinalScreenshot
  'main-thread-tasks': MainThreadTasks
}

export interface LcpLazyLoaded {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details
}

export interface Details {
  type: string
  items: Item[]
  headings: Heading[]
}

export interface Item {
  node: Node
}

export interface Node {
  lhId: string
  type: string
  path: string
  snippet: string
  boundingRect: BoundingRect
  nodeLabel: string
  selector: string
}

export interface BoundingRect {
  top: number
  width: number
  height: number
  bottom: number
  right: number
  left: number
}

export interface Heading {
  key: string
  label: string
  valueType: string
}

export interface UsesTextCompression {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details2
  numericValue: number
  numericUnit: string
}

export interface Details2 {
  overallSavingsMs: number
  overallSavingsBytes: number
  type: string
  headings: any[]
  debugData: DebugData
  sortedBy: string[]
  items: any[]
}

export interface DebugData {
  type: string
  metricSavings: MetricSavings
}

export interface MetricSavings {
  LCP: number
  FCP: number
}

export interface ThirdPartyFacades {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Diagnostics {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details3
}

export interface Details3 {
  items: Item2[]
  type: string
}

export interface Item2 {
  numStylesheets: number
  numScripts: number
  numTasksOver500ms: number
  maxServerLatency: number
  totalByteWeight: number
  rtt: number
  numTasksOver10ms: number
  numTasksOver50ms: number
  numTasksOver25ms: number
  numTasks: number
  totalTaskTime: number
  numFonts: number
  numRequests: number
  numTasksOver100ms: number
  maxRtt: number
  throughput: number
  mainDocumentTransferSize: number
}

export interface NoDocumentWrite {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details4
}

export interface Details4 {
  items: any[]
  type: string
  headings: any[]
}

export interface Redirects {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details5
  numericValue: number
  numericUnit: string
}

export interface Details5 {
  overallSavingsMs: number
  items: any[]
  type: string
  headings: any[]
}

export interface NonCompositedAnimations {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details6
}

export interface Details6 {
  type: string
  items: any[]
  headings: any[]
}

export interface UnsizedImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details7
}

export interface Details7 {
  type: string
  items: Item3[]
  headings: Heading2[]
}

export interface Item3 {
  node: Node2
  url: string
}

export interface Node2 {
  type: string
  path: string
  lhId: string
  snippet: string
  nodeLabel: string
  boundingRect: BoundingRect2
  selector: string
}

export interface BoundingRect2 {
  width: number
  height: number
  bottom: number
  top: number
  left: number
  right: number
}

export interface Heading2 {
  key: string
  valueType: string
  label?: string
}

export interface Interactive {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface UsesPassiveEventListeners {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details8
}

export interface Details8 {
  items: any[]
  headings: any[]
  type: string
}

export interface LayoutShiftElements {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details9
}

export interface Details9 {
  type: string
  items: Item4[]
  headings: Heading3[]
}

export interface Item4 {
  node: Node3
  score: number
}

export interface Node3 {
  snippet: string
  selector: string
  path: string
  nodeLabel: string
  lhId: string
  boundingRect: BoundingRect3
  type: string
}

export interface BoundingRect3 {
  right: number
  bottom: number
  width: number
  left: number
  top: number
  height: number
}

export interface Heading3 {
  key: string
  valueType: string
  label: string
  granularity?: number
}

export interface FontDisplay {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details10
  warnings: any[]
}

export interface Details10 {
  headings: Heading4[]
  items: Item5[]
  type: string
}

export interface Heading4 {
  key: string
  valueType: string
  label: string
}

export interface Item5 {
  wastedMs: number
  url: string
}

export interface UsesResponsiveImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details11
  numericValue: number
  numericUnit: string
}

export interface Details11 {
  overallSavingsMs: number
  items: any[]
  headings: any[]
  overallSavingsBytes: number
  type: string
  debugData: DebugData2
  sortedBy: string[]
}

export interface DebugData2 {
  metricSavings: MetricSavings2
  type: string
}

export interface MetricSavings2 {
  LCP: number
  FCP: number
}

export interface Metrics {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details12
  numericValue: number
  numericUnit: string
}

export interface Details12 {
  type: string
  items: Item6[]
}

export interface Item6 {
  observedCumulativeLayoutShift?: number
  observedFirstContentfulPaintAllFramesTs?: number
  observedLargestContentfulPaintTs?: number
  cumulativeLayoutShift?: number
  observedLargestContentfulPaintAllFrames?: number
  observedFirstPaintTs?: number
  observedTimeOriginTs?: number
  observedFirstMeaningfulPaint?: number
  observedFirstContentfulPaintTs?: number
  observedCumulativeLayoutShiftMainFrame?: number
  observedLoadTs?: number
  observedLastVisualChange?: number
  firstContentfulPaint?: number
  observedFirstContentfulPaint?: number
  observedSpeedIndex?: number
  observedTimeOrigin?: number
  observedFirstContentfulPaintAllFrames?: number
  firstMeaningfulPaint?: number
  observedFirstPaint?: number
  observedLargestContentfulPaint?: number
  observedLastVisualChangeTs?: number
  observedNavigationStart?: number
  observedTraceEndTs?: number
  maxPotentialFID?: number
  observedFirstMeaningfulPaintTs?: number
  lcpLoadEnd?: number
  observedDomContentLoadedTs?: number
  observedSpeedIndexTs?: number
  lcpLoadStart?: number
  timeToFirstByte?: number
  observedLargestContentfulPaintAllFramesTs?: number
  observedDomContentLoaded?: number
  observedFirstVisualChange?: number
  speedIndex?: number
  interactive?: number
  observedNavigationStartTs?: number
  cumulativeLayoutShiftMainFrame?: number
  observedTraceEnd?: number
  largestContentfulPaint?: number
  observedFirstVisualChangeTs?: number
  observedLoad?: number
  totalBlockingTime?: number
  lcpInvalidated?: boolean
}

export interface PrioritizeLcpImage {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details13
  numericValue: number
  numericUnit: string
}

export interface Details13 {
  headings: any[]
  items: any[]
  sortedBy: string[]
  overallSavingsMs: number
  type: string
  debugData: DebugData3
}

export interface DebugData3 {
  initiatorPath: InitiatorPath[]
  type: string
  pathLength: number
}

export interface InitiatorPath {
  initiatorType: string
  url: string
}

export interface BootupTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details14
  numericValue: number
  numericUnit: string
}

export interface Details14 {
  summary: Summary
  items: Item7[]
  type: string
  sortedBy: string[]
  headings: Heading5[]
}

export interface Summary {
  wastedMs: number
}

export interface Item7 {
  total: number
  scriptParseCompile: number
  scripting: number
  url: string
}

export interface Heading5 {
  key: string
  label: string
  valueType: string
  granularity?: number
}

export interface UsesOptimizedImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details15
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details15 {
  sortedBy: string[]
  type: string
  items: any[]
  debugData: DebugData4
  headings: any[]
  overallSavingsMs: number
  overallSavingsBytes: number
}

export interface DebugData4 {
  type: string
  metricSavings: MetricSavings3
}

export interface MetricSavings3 {
  FCP: number
  LCP: number
}

export interface ScriptTreemapData {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details16
}

export interface Details16 {
  nodes: Node4[]
  type: string
}

export interface Node4 {
  resourceBytes: number
  children?: Children[]
  name: string
  unusedBytes: number
}

export interface Children {
  resourceBytes: number
  name: string
  unusedBytes: number
}

export interface UsesRelPreload {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details17
}

export interface Details17 {
  items: any[]
  headings: any[]
  type: string
  overallSavingsMs: number
}

export interface OffscreenImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details18
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details18 {
  sortedBy: string[]
  headings: any[]
  debugData: DebugData5
  overallSavingsBytes: number
  items: any[]
  type: string
  overallSavingsMs: number
}

export interface DebugData5 {
  type: string
  metricSavings: MetricSavings4
}

export interface MetricSavings4 {
  LCP: number
  FCP: number
}

export interface UnminifiedCss {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details19
  numericValue: number
  numericUnit: string
}

export interface Details19 {
  type: string
  overallSavingsMs: number
  headings: any[]
  overallSavingsBytes: number
  debugData: DebugData6
  sortedBy: string[]
  items: any[]
}

export interface DebugData6 {
  type: string
  metricSavings: MetricSavings5
}

export interface MetricSavings5 {
  LCP: number
  FCP: number
}

export interface FirstMeaningfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface NetworkRtt {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details20
  numericValue: number
  numericUnit: string
}

export interface Details20 {
  headings: Heading6[]
  sortedBy: string[]
  items: Item8[]
  type: string
}

export interface Heading6 {
  label: string
  valueType: string
  key: string
  granularity?: number
}

export interface Item8 {
  origin: string
  rtt: number
}

export interface Viewport {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  explanation: string
}

export interface RenderBlockingResources {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details21
  numericValue: number
  numericUnit: string
}

export interface Details21 {
  type: string
  overallSavingsMs: number
  headings: any[]
  items: any[]
}

export interface CumulativeLayoutShift {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details22
  numericValue: number
  numericUnit: string
}

export interface Details22 {
  type: string
  items: Item9[]
}

export interface Item9 {
  cumulativeLayoutShiftMainFrame: number
}

export interface UnusedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details23
  numericValue: number
  numericUnit: string
}

export interface Details23 {
  overallSavingsBytes: number
  headings: Heading7[]
  overallSavingsMs: number
  type: string
  items: Item10[]
  sortedBy: string[]
  debugData: DebugData7
}

export interface Heading7 {
  label: string
  subItemsHeading: SubItemsHeading
  valueType: string
  key: string
}

export interface SubItemsHeading {
  key: string
  valueType?: string
}

export interface Item10 {
  totalBytes: number
  wastedBytes: number
  url: string
  wastedPercent: number
}

export interface DebugData7 {
  type: string
  metricSavings: MetricSavings6
}

export interface MetricSavings6 {
  LCP: number
  FCP: number
}

export interface LargestContentfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface LongTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details24
}

export interface Details24 {
  skipSumming: string[]
  sortedBy: string[]
  type: string
  debugData: DebugData8
  items: Item11[]
  headings: Heading8[]
}

export interface DebugData8 {
  urls: string[]
  type: string
  tasks: Task[]
}

export interface Task {
  startTime: number
  duration: number
  other: number
  scriptEvaluation?: number
  urlIndex: number
}

export interface Item11 {
  url: string
  startTime: number
  duration: number
}

export interface Heading8 {
  label: string
  valueType: string
  key: string
  granularity?: number
}

export interface PerformanceBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface UsesRelPreconnect {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details25
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details25 {
  items: any[]
  overallSavingsMs: number
  sortedBy: string[]
  type: string
  headings: any[]
}

export interface CriticalRequestChains {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details26
}

export interface Details26 {
  type: string
  chains: Chains
  longestChain: LongestChain
}

export interface Chains {
  EE0D8BC3D3763A6226532BE7CC794C48: Ee0D8Bc3D3763A6226532Be7Cc794C48
}

export interface Ee0D8Bc3D3763A6226532Be7Cc794C48 {
  request: Request
  children: Children2
}

export interface Request {
  responseReceivedTime: number
  transferSize: number
  startTime: number
  url: string
  endTime: number
}

export interface Children2 {
  '65.10': N6510
}

export interface N6510 {
  request: Request2
}

export interface Request2 {
  transferSize: number
  url: string
  responseReceivedTime: number
  startTime: number
  endTime: number
}

export interface LongestChain {
  duration: number
  transferSize: number
  length: number
}

export interface ScreenshotThumbnails {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details27
}

export interface Details27 {
  type: string
  scale: number
  items: Item12[]
}

export interface Item12 {
  timestamp: number
  timing: number
  data: string
}

export interface NetworkRequests {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details28
}

export interface Details28 {
  debugData: DebugData9
  headings: Heading9[]
  type: string
  items: Item13[]
}

export interface DebugData9 {
  networkStartTimeTs: number
  type: string
}

export interface Heading9 {
  key: string
  valueType: string
  label: string
  granularity?: number
  displayUnit?: string
}

export interface Item13 {
  networkRequestTime: number
  networkEndTime: number
  finished: boolean
  resourceType: string
  statusCode: number
  experimentalFromMainFrame?: boolean
  entity: string
  url: string
  rendererStartTime: number
  transferSize: number
  priority: string
  resourceSize: number
  sessionTargetType: string
  mimeType?: string
  protocol?: string
}

export interface SpeedIndex {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface TimingBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface MainthreadWorkBreakdown {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details29
  numericValue: number
  numericUnit: string
}

export interface Details29 {
  type: string
  headings: Heading10[]
  items: Item14[]
  sortedBy: string[]
}

export interface Heading10 {
  valueType: string
  key: string
  label: string
  granularity?: number
}

export interface Item14 {
  groupLabel: string
  group: string
  duration: number
}

export interface ServerResponseTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details30
  numericValue: number
  numericUnit: string
}

export interface Details30 {
  overallSavingsMs: number
  headings: Heading11[]
  items: Item15[]
  type: string
}

export interface Heading11 {
  valueType: string
  key: string
  label: string
}

export interface Item15 {
  responseTime: number
  url: string
}

export interface TotalByteWeight {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details31
  numericValue: number
  numericUnit: string
}

export interface Details31 {
  sortedBy: string[]
  items: Item16[]
  headings: Heading12[]
  type: string
}

export interface Item16 {
  url: string
  totalBytes: number
}

export interface Heading12 {
  label: string
  key: string
  valueType: string
}

export interface NetworkServerLatency {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details32
  numericValue: number
  numericUnit: string
}

export interface Details32 {
  sortedBy: string[]
  headings: Heading13[]
  type: string
  items: Item17[]
}

export interface Heading13 {
  valueType: string
  key: string
  label: string
  granularity?: number
}

export interface Item17 {
  origin: string
  serverResponseTime: number
}

export interface FirstContentfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface ThirdPartySummary {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details33
}

export interface Details33 {
  items: Item18[]
  type: string
  summary: Summary2
  isEntityGrouped: boolean
  headings: Heading14[]
}

export interface Item18 {
  mainThreadTime: number
  transferSize: number
  subItems: SubItems
  entity: string
  blockingTime: number
}

export interface SubItems {
  type: string
  items: Item19[]
}

export interface Item19 {
  transferSize: number
  blockingTime: number
  url: string
  mainThreadTime?: number
}

export interface Summary2 {
  wastedBytes: number
  wastedMs: number
}

export interface Heading14 {
  key: string
  subItemsHeading: SubItemsHeading2
  valueType: string
  label: string
  granularity?: number
}

export interface SubItemsHeading2 {
  valueType?: string
  key: string
}

export interface UserTimings {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details34
}

export interface Details34 {
  items: Item20[]
  headings: Heading15[]
  type: string
}

export interface Item20 {
  name: string
  startTime: number
  duration?: number
  timingType: string
}

export interface Heading15 {
  valueType: string
  key: string
  label: string
  granularity?: number
}

export interface DuplicatedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details35
  numericValue: number
  numericUnit: string
}

export interface Details35 {
  type: string
  overallSavingsBytes: number
  items: any[]
  sortedBy: string[]
  debugData: DebugData10
  headings: any[]
  overallSavingsMs: number
}

export interface DebugData10 {
  metricSavings: MetricSavings7
  type: string
}

export interface MetricSavings7 {
  LCP: number
  FCP: number
}

export interface LargestContentfulPaintElement {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details36
}

export interface Details36 {
  items: Item21[]
  type: string
}

export interface Item21 {
  items: Item22[]
  type: string
  headings: Heading16[]
}

export interface Item22 {
  node?: Node5
  percent?: string
  phase?: string
  timing?: number
}

export interface Node5 {
  snippet: string
  type: string
  nodeLabel: string
  lhId: string
  boundingRect: BoundingRect4
  selector: string
  path: string
}

export interface BoundingRect4 {
  top: number
  left: number
  right: number
  bottom: number
  height: number
  width: number
}

export interface Heading16 {
  key: string
  valueType: string
  label: string
}

export interface EfficientAnimatedContent {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details37
  numericValue: number
  numericUnit: string
}

export interface Details37 {
  overallSavingsMs: number
  type: string
  headings: any[]
  sortedBy: string[]
  overallSavingsBytes: number
  items: any[]
  debugData: DebugData11
}

export interface DebugData11 {
  type: string
  metricSavings: MetricSavings8
}

export interface MetricSavings8 {
  FCP: number
  LCP: number
}

export interface UnminifiedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details38
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details38 {
  sortedBy: string[]
  headings: any[]
  items: any[]
  overallSavingsBytes: number
  overallSavingsMs: number
  debugData: DebugData12
  type: string
}

export interface DebugData12 {
  metricSavings: MetricSavings9
  type: string
}

export interface MetricSavings9 {
  FCP: number
  LCP: number
}

export interface UsesLongCacheTtl {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details39
  numericValue: number
  numericUnit: string
}

export interface Details39 {
  items: any[]
  headings: any[]
  type: string
}

export interface MaxPotentialFid {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface LegacyJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details40
  numericValue: number
  numericUnit: string
}

export interface Details40 {
  debugData: DebugData13
  sortedBy: string[]
  headings: Heading17[]
  overallSavingsBytes: number
  items: Item23[]
  overallSavingsMs: number
  type: string
}

export interface DebugData13 {
  type: string
  metricSavings: MetricSavings10
}

export interface MetricSavings10 {
  FCP: number
  LCP: number
}

export interface Heading17 {
  valueType: string
  label?: string
  subItemsHeading?: SubItemsHeading3
  key?: string
}

export interface SubItemsHeading3 {
  valueType?: string
  key: string
}

export interface Item23 {
  totalBytes: number
  wastedBytes: number
  url: string
  subItems: SubItems2
}

export interface SubItems2 {
  type: string
  items: Item24[]
}

export interface Item24 {
  location: Location
  signal: string
}

export interface Location {
  type: string
  url: string
  line: number
  urlProvider: string
  column: number
}

export interface UnusedCssRules {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details41
  numericValue: number
  numericUnit: string
}

export interface Details41 {
  items: Item25[]
  type: string
  debugData: DebugData14
  headings: Heading18[]
  overallSavingsBytes: number
  overallSavingsMs: number
  sortedBy: string[]
}

export interface Item25 {
  wastedPercent: number
  url: string
  wastedBytes: number
  totalBytes: number
}

export interface DebugData14 {
  type: string
  metricSavings: MetricSavings11
}

export interface MetricSavings11 {
  LCP: number
  FCP: number
}

export interface Heading18 {
  key: string
  label: string
  valueType: string
}

export interface DomSize {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details42
  numericValue: number
  numericUnit: string
}

export interface Details42 {
  type: string
  items: Item26[]
  headings: Heading19[]
}

export interface Item26 {
  value: Value
  statistic: string
  node?: Node6
}

export interface Value {
  granularity: number
  value: number
  type: string
}

export interface Node6 {
  nodeLabel: string
  lhId: string
  path: string
  snippet: string
  selector: string
  boundingRect: BoundingRect5
  type: string
}

export interface BoundingRect5 {
  left: number
  right: number
  bottom: number
  top: number
  height: number
  width: number
}

export interface Heading19 {
  label: string
  valueType: string
  key: string
}

export interface ModernImageFormats {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details43
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details43 {
  overallSavingsMs: number
  type: string
  sortedBy: string[]
  items: any[]
  debugData: DebugData15
  headings: any[]
  overallSavingsBytes: number
}

export interface DebugData15 {
  metricSavings: MetricSavings12
  type: string
}

export interface MetricSavings12 {
  LCP: number
  FCP: number
}

export interface TotalBlockingTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface FinalScreenshot {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details44
}

export interface Details44 {
  timing: number
  timestamp: number
  type: string
  data: string
}

export interface MainThreadTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details45
}

export interface Details45 {
  headings: Heading20[]
  type: string
  items: Item27[]
}

export interface Heading20 {
  label: string
  granularity: number
  valueType: string
  key: string
}

export interface Item27 {
  startTime: number
  duration: number
}
