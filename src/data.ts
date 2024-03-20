export interface Task {
  title: string | null;
  description: string | null;
  due: string | null;
  priority: string | null;
  category: string | null;
}

export const data: Array<Task> = [
  {title: "Trim hedges along the fence", description: "Use hedge trimmers to shape and neaten the hedges", due: "18/03/2024", priority: "medium", category: "personal"},
  {title: "Construct a raised vegetable bed", description: "Gather materials and build a raised bed for growing vegetables", due: "28/03/2024", priority: "high", category: "personal"},
  {title: "Mulch flower beds", description: "Spread organic mulch around flowers to retain moisture and suppress weeds", due: "25/03/2024", priority: "medium", category: "personal"},
  {title: "Client Meeting Preparation", description: "Prepare presentation and materials for upcoming client meeting", due: "28/03/2024", priority: "medium", category: "work" },
  {title: "Join a recreational swimming team", description: "Register for a local swimming team and attend the first practice session", due: "28/03/2024", priority: "low", category: "personal"},
  {title: "Project Status Update", description: "Update project status report and distribute to team members", due: "22/03/2024", priority: "medium", category: "work" },
  {title: "Budget Review", description: "Review and adjust departmental budget for next fiscal year", due: "15/04/2024", priority: "high", category: "work" },
  {title: "Construct a compost bin", description: "Build or purchase a compost bin for recycling organic waste", due: "28/03/2024", priority: "high", category: "personal"},
  {title: "Prune fruit trees", description: "Remove dead or diseased branches and shape the canopy for better fruit production", due: "16/03/2024", priority: "high", category: "personal"},
  {title: "Practice dribbling skills", description: "Spend 30 minutes practicing dribbling with both feet", due: "18/03/2024", priority: "medium", category: "personal"},
  {title: "Join a recreational soccer league", description: "Register for a local soccer league and attend the first practice session", due: "28/03/2024", priority: "high", category: "personal"},
  {title: "Work on shooting accuracy", description: "Set up targets and practice shooting accuracy for 45 minutes", due: "16/03/2024", priority: "high", category: "personal"},
  {title: "Attend rugby game", description: "Watch the local rugby team play against their rivals", due: "28/03/2024", priority: "low", category: "personal"},
  {title: "Stretching routine", description: "Follow a 15-minute stretching routine to improve flexibility", due: "25/03/2024", priority: "medium", category: "personal"},
  {title: "Work on shooting accuracy", description: "Practice basketball shooting accuracy for 45 minutes", due: "16/03/2024", priority: "low", category: "personal"},
  {title: "Attend basketball game", description: "Watch the local basketball team play against their rivals", due: "28/03/2024", priority: "high", category: "personal"},
  {title: "Stretching routine for flexibility", description: "Follow a 15-minute stretching routine to improve flexibility", due: "25/03/2024", priority: "medium", category: "personal"},
  {title: "Join a recreational soccer league", description: "Register for a local soccer league and attend the first practice session", due: "28/03/2024", priority: "high", category: "personal"},
  {title: "Work on shooting accuracy", description: "Set up targets and practice shooting accuracy for 45 minutes", due: "16/03/2024", priority: "high", category: "personal"},
  {title: "Practice dribbling skills", description: "Spend 30 minutes practicing dribbling with both feet", due: "18/03/2024", priority: "medium", category: "personal"},
  {title: "Attend basketball game", description: "Watch the local basketball team play against their rivals", due: "28/03/2024", priority: "high", category: "personal"},
  {title: "Yoga routine", description: "Follow a 15-minute yoga routine to improve flexibility", due: "25/03/2024", priority: "low", category: "personal"},
  {title: "Quarterly Sales Report", description: "Compile and analyze sales data for the past quarter", due: "03/04/2024", priority: "high", category: "work" },
  {title: "Team Training Session", description: "Organize and facilitate a training session for team members", due: "10/04/2024", priority: "medium", category: "work" },

]
