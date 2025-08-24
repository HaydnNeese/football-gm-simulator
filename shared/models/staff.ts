export interface Staff {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  birthDate: Date;
  teamId?: string; // Optional, if the staff member is associated with a team
  role: StaffRole;
  hireDate: Date;
  contractId?: string;

  // General Staff Ratings
  innovative?: boolean; // Whether the staff member is known for innovation
  leadership?: number; // provides boost to staff that work with or under this staff member
  communication?: number; // How well the staff member communicates with players and other staff
  adaptability?: number; // Ability to adapt to changing situations
  strategy?: number; // Ability to develop and implement effective strategies
  workEthic?: number; // Dedication and effort put into work

  // Front Office
  negotiation?: number; // Skill in negotiating contracts and deals
  financialManagement?: number; // Ability to manage finances effectively
  publicRelations?: number; // Skill in managing public relations and media interactions
  decisionMaking?: number; // Ability to make sound decisions under pressure

  // Scouting
  talentEvaluation?: number; // Skill in evaluating player talent
  scoutingNetwork?: number; // Effectiveness of the scouting network
  networking?: number; // Ability to build and maintain relationships within the league
  playerDevelopment?: number; // Skill in developing players' skills and abilities
  reportQuality?: number; // Quality of scouting reports and assessments

  // Medical
  injuryPrevention?: number; // Focus on preventing injuries through training and conditioning
  rehabilitation?: number; // Skill in rehabilitating injured players
  sportsScience?: number; // Knowledge of sports science and its application when working with players
  nutrition?: number; // Knowledge of nutrition and its impact on player performance
  mentalHealthSupport?: number; // Ability to support players' mental health
  surgicalExpertise?: number; // Expertise in performing or overseeing surgeries

  // Analytics
  dataAnalysis?: number; // Skill in analyzing data to inform decisions
  gamePlanning?: number; // Ability to develop game plans and strategies
  attentionToDetail?: number; // Focus on details that impact performance

  // Facility
  organization?: number; // Ability to keep the facility organized and efficient
  securityManagement?: number; // Skill in managing security for the facility
  equipmentKnowledge?: number; // Knowledge of equipment and its maintenance
  fieldMaintenance?: number; // Skill in maintaining the playing field and facilities
  facilityManagement?: number; // Overall management of the facility
}
