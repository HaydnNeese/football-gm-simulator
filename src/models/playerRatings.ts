/**
 * PlayerRatings represents the skill ratings and physical/mental attributes for a football player.
 * Each property is optional and can be used to model players of any position.
 */
export interface PlayerRatings {
  // --- Base Athletic Traits ---

  /** Top running speed (straight-line). */
  speed?: number;
  /** How quickly the player reaches top speed. */
  acceleration?: number;
  /** Ability to change direction quickly and smoothly. */
  agility?: number;
  /** Quickness and efficiency in changing direction. */
  changeOfDirection?: number;
  /** Physical power and ability to overpower opponents. */
  strength?: number;
  /** Ability to deliver impactful hits or blocks. */
  impactPower?: number;
  /** Maximum vertical leap height. */
  verticalJump?: number;
  /** Ability to maintain performance throughout the game. */
  stamina?: number;
  /** Ability to withstand hits and play through pain/injuries. */
  toughness?: number;
  /** Football intelligence and ability to read/react to the game. */
  awareness?: number;
  /** Ability to maintain focus and avoid penalties. */
  discipline?: number;
  /** Ability to recovery from injuries */
  injuryRecovery?: number;

  // --- Quarterback-Specific Traits ---

  /** Maximum throwing distance and velocity. */
  throwPower?: number;
  /** Accuracy on short throws (0-10 yards). */
  throwAccuracyShort?: number;
  /** Accuracy on medium throws (10-25 yards). */
  throwAccuracyMedium?: number;
  /** Accuracy on deep throws (25+ yards). */
  throwAccuracyDeep?: number;
  /** Ability to throw accurately while moving. */
  throwOnRun?: number;
  /** Ability to fake handoffs and sell play action. */
  playAction?: number;
  /** Ability to sense pressure and move in the pocket. */
  pocketPresence?: number;
  /** Speed of the throw release after the snap. */
  releaseTime?: number;
  /** Ability to make smart decisions under pressure. */
  decisionMaking?: number;
  /** Ability to scramble and gain yards when plays break down. */
  scrambling?: number;
  /** Ability to avoid sacks and break tackles as a QB. */
  breakSack?: number;
  /** Ability to read the field and find open receivers. */
  fieldVision?: number;

  // --- Ball Handling ---

  /** Ability to protect the ball and avoid fumbles. */
  ballSecurity?: number;
  /** Ability to find running lanes and make quick cuts. */
  ballCarrierVision?: number;

  // --- Running Traits ---

  /** Ability to break tackles and gain extra yards. */
  breakTackle?: number;
  /** Maximum speed when running with the ball. */
  topBallCarrierSpeed?: number;
  /** Ability to run through defenders. */
  trucking?: number;
  /** Ability to evade defenders with agility. */
  elusiveness?: number;
  /** Ability to fend off tacklers with a stiff arm. */
  stiffArm?: number;
  /** Ability to spin away from defenders. */
  spinMove?: number;
  /** Ability to juke or fake out defenders. */
  jukeMove?: number;
  /** Effectiveness in short-yardage situations. */
  shortYardage?: number;
  /** Effectiveness in goal-line situations. */
  goalLine?: number;
  /** Effectiveness in the open field */
  openFieldRunning?: number;

  // --- Receiving Skills ---

  /** Ability to catch passes. */
  catching?: number;
  /** Ability to catch passes in traffic. */
  catchInTraffic?: number;
  /** Ability to make spectacular or difficult catches. */
  spectacularCatch?: number;
  /** Ability to win contested catches. */
  contestedCatches?: number;
  /** Yards gained after the catch. */
  yardsAfterCatch?: number;
  /** Timing and ability to win jump balls. */
  jumpBallTiming?: number;

  // --- Route Running ---

  /** Overall route running ability. */
  routeRunning?: number;
  /** Effectiveness on short routes. */
  shortRoute?: number;
  /** Effectiveness on medium routes. */
  mediumRoute?: number;
  /** Effectiveness on deep routes. */
  deepRoute?: number;
  /** Ability to create separation from defenders. */
  separation?: number;
  /** Ability to release from the line of scrimmage. */
  release?: number;

  // --- Blocking Skills ---

  /** Effectiveness in run blocking. */
  runBlocking?: number;
  /** Effectiveness in pass blocking. */
  passBlocking?: number;
  /** Ability to pull and block on outside runs. */
  pullBlocking?: number;
  /** Ability to block for the quarterback while scrambling. */
  scrambleBlocking?: number;
  /** Ability to block for the quarterback on play action. */
  playActionBlocking?: number;
  /** Ability to block for the target on screens. */
  screenBlocking?: number;
  /** Ability to lead block for a runner. */
  leadBlocking?: number;

  // --- Defensive Skills (if applicable) ---
  /** Ability to tackle ball carriers. */
  tackling?: number;
  /** Ability to shed blocks and get to the ball carrier. */
  blockShedding?: number;
  /** Ability to blitz and pressure the quarterback. */
  blitzing?: number;
  /** Ability to diagnose plays and react quickly. */
  playRecognition?: number;
  /** Ability to tackle in open space. */
  openFieldTackling?: number;
  /** Ability to cover tight ends and running backs in the passing game. */
  coverageAgainstTEsRBs?: number;
  /** Ability to cover slot receivers in the passing game. */
  coverageAgainstSlot?: number;
  /** Ability to cover deep routes and prevent big plays. */
  deepCoverage?: number;
  /** Ability to play the run and set the edge. */
  runDefense?: number;

  // --- defensive Line Skills (if applicable) ---
  /** Ability to rush the passer from the defensive line. */
  passRush?: number;
  /** Ability to rush the passer with finesse moves */
  finessePassRush?: number;
  /** Ability to rush the passer with power moves */
  powerPassRush?: number;
  /** Ability to stop the run at the line of scrimmage. */
  runStopping?: number;
  /** Ability to shed blocks and get to the ball carrier. */
  penetration?: number;
  /** Ability to play the run and set the edge. */
  edgeSetting?: number;
  /** Ability to disengage from blockers and make plays. */
  disengagement?: number;
  /** Ability to read the offensive line and anticipate plays. */
  offensiveLineRecognition?: number;

  // --- linebacker Skills (if applicable) ---
  /** Ability to deliver hard hits and tackle effectively. */
  hitPower?: number;

  // --- Defensive Back Skills (if applicable) ---
  /** Ability to use press coverage effectively  */
  pressCoverage?: number;
  /** Ability to use off ball coverage effectively  */
  offBallCoverage?: number;
  /** Ability to cover receivers in the passing game with man coverage. */
  manCoverage?: number;
  /** Ability to cover receivers in the passing game with zone coverage. */
  zoneCoverage?: number;
  /** Ability to read the quarterback and anticipate throws. */
  ballHawking?: number;
  /** Ability to intercept passes. */
  interceptions?: number;
  /** Ability to deflect passes. */
  passDeflection?: number;

  // --- Kicking/Punting Skills (if applicable) ---
  /** Kick power for kickers. */
  kickPower?: number;
  /** Kick accuracy for kickers. */
  kickAccuracy?: number;
  /** Punt power for punters. */
  puntPower?: number;
  /** Punt accuracy for punters. */
  puntAccuracy?: number;
  /** Ability to execute onside kicks. */
  onsideKickAbility?: number;

  // --- Kick Return/Punt Return Skills (if applicable) ---
  /** Ability to find running lanes on kick returns. */
  kickReturnVision?: number;
  /** Ability to find running lanes on punt returns. */
  puntReturnVision?: number;
}
