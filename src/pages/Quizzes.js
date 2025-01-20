import React, { useState, useEffect } from "react";
import "./Quizzes.css";

const allQuizzes = {
  athletics: [
    {
      question: "What is the purpose of anti-doping regulations in athletics?",
      options: [
        "To ensure fair competition",
        "To increase stamina",
        "To allow athletes to take supplements freely",
        "To monitor athletic performance"
      ],
      correctOption: 0,
      explanation: "Anti-doping regulations ensure fair competition and prevent athletes from gaining an unfair advantage through prohibited substances."
    },
    {
      question: "Which of the following is classified as a banned substance in athletics?",
      options: [
        "Creatine",
        "Anabolic steroids",
        "Caffeine",
        "Vitamin D"
      ],
      correctOption: 1,
      explanation: "Anabolic steroids are banned substances due to their ability to enhance muscle growth and performance illegally."
    },
    {
      question: "What is a common method used to detect doping in athletics?",
      options: [
        "Urine tests",
        "Hair follicle tests",
        "Blood tests",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "Doping in athletics can be detected through urine tests, blood tests, and hair follicle tests."
    },
    {
      question: "What does 'EPO' stand for in anti-doping terminology?",
      options: [
        "Enhanced Performance Output",
        "Erythropoietin",
        "Erythropoiesis Optimization",
        "External Performance Output"
      ],
      correctOption: 1,
      explanation: "EPO stands for Erythropoietin, a hormone that stimulates red blood cell production and is commonly abused in endurance sports."
    },
    {
      question: "Which of the following can be a reason for testing positive in an anti-doping test?",
      options: [
        "Consuming contaminated supplements",
        "Taking prescribed medication",
        "Using banned substances intentionally",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "Testing positive can occur due to consuming contaminated supplements, taking prohibited medication, or intentionally using banned substances."
    },
    {
      question: "Which of the following is a legal supplement used by athletes?",
      options: [
        "Anabolic steroids",
        "Caffeine",
        "EPO",
        "Human Growth Hormone"
      ],
      correctOption: 1,
      explanation: "Caffeine is a legal supplement that athletes often use for its stimulant effects but in controlled amounts."
    },
    {
      question: "What is the maximum penalty for a doping violation in athletics?",
      options: [
        "Suspension for a few weeks",
        "Suspension for a year",
        "Life ban",
        "Fine only"
      ],
      correctOption: 2,
      explanation: "The maximum penalty for a doping violation in athletics can be a life ban, especially for severe or repeated offenses."
    },
    {
      question: "What is the role of WADA in athletics anti-doping efforts?",
      options: [
        "To fund athletic programs",
        "To organize athletics competitions",
        "To regulate and monitor doping worldwide",
        "To promote healthy lifestyle choices"
      ],
      correctOption: 2,
      explanation: "WADA (World Anti-Doping Agency) is responsible for regulating and monitoring anti-doping efforts across all sports, including athletics."
    },
    {
      question: "Which of the following is a common banned substance in athletics used to enhance endurance?",
      options: [
        "Erythropoietin (EPO)",
        "Creatine",
        "Beta-alanine",
        "Caffeine"
      ],
      correctOption: 0,
      explanation: "Erythropoietin (EPO) is commonly abused in endurance events to increase red blood cell production and oxygen-carrying capacity."
    },
    {
      question: "What is the purpose of blood doping in athletics?",
      options: [
        "To reduce muscle fatigue",
        "To increase red blood cell production",
        "To enhance mental focus",
        "To improve flexibility"
      ],
      correctOption: 1,
      explanation: "Blood doping is used to increase red blood cell production and improve endurance by enhancing the oxygen-carrying capacity of the blood."
    },
    {
      question: "Which of the following substances is used by some athletes to mask the presence of other banned substances?",
      options: [
        "Caffeine",
        "Diuretics",
        "Protein supplements",
        "Creatine"
      ],
      correctOption: 1,
      explanation: "Diuretics are often used by athletes to mask the presence of other banned substances by increasing urine output and diluting urine."
    },
    {
      question: "Which anti-doping test is used to detect substances like EPO?",
      options: [
        "Blood test",
        "Urine test",
        "Hair follicle test",
        "All of the above"
      ],
      correctOption: 0,
      explanation: "EPO is detected through blood tests, as it directly affects the body's red blood cell count and oxygen-carrying capacity."
    },
    {
      question: "What does TUE stand for in anti-doping?",
      options: [
        "Test Under Evaluation",
        "Therapeutic Use Exemption",
        "Trial Use Evaluation",
        "Therapeutic Unilateral Effect"
      ],
      correctOption: 1,
      explanation: "TUE stands for Therapeutic Use Exemption, which allows athletes to use otherwise banned substances for medical reasons."
    },
    {
      question: "What should an athlete do if they are unsure about a supplement they wish to take?",
      options: [
        "Take the supplement and hope for the best",
        "Consult the WADA list of prohibited substances",
        "Consult their coach for advice",
        "Ask fellow athletes who use the supplement"
      ],
      correctOption: 1,
      explanation: "Athletes should consult the WADA list of prohibited substances to check whether a supplement is safe to use."
    },
    {
      question: "What is the main goal of anti-doping agencies like WADA?",
      options: [
        "To encourage healthy eating habits",
        "To improve athletic performance",
        "To ensure fair competition in sports",
        "To provide training programs for athletes"
      ],
      correctOption: 2,
      explanation: "The main goal of anti-doping agencies is to ensure fair competition by preventing athletes from using prohibited substances to gain an unfair advantage."
    },
    {
      question: "What type of doping involves increasing the amount of oxygen available to the muscles?",
      options: [
        "Blood doping",
        "Gene doping",
        "Steroid doping",
        "Stimulant doping"
      ],
      correctOption: 0,
      explanation: "Blood doping involves increasing the red blood cell count to improve the body's oxygen-carrying capacity and endurance."
    },
    {
      question: "Which of the following is a potential side effect of anabolic steroid abuse in athletics?",
      options: [
        "Muscle growth",
        "Hair loss",
        "Increased aggression",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "Anabolic steroid abuse can cause muscle growth, hair loss, and increased aggression, among other negative side effects."
    },
    {
      question: "Which of the following substances is considered legal and is often used for muscle recovery in athletics?",
      options: [
        "Anabolic steroids",
        "Caffeine",
        "Whey protein",
        "EPO"
      ],
      correctOption: 2,
      explanation: "Whey protein is a legal supplement often used to aid in muscle recovery and repair after intense athletic activity."
    },
    {
      question: "What is the term used for the practice of using drugs or methods that improve athletic performance illegally?",
      options: [
        "Doping",
        "Supplying",
        "Recovery",
        "Testing"
      ],
      correctOption: 0,
      explanation: "Doping refers to the use of prohibited drugs or methods to enhance athletic performance and is illegal in all sports."
    },
    {
      question: "What is the penalty for an athlete caught using banned substances in athletics?",
      options: [
        "Verbal warning",
        "Suspension or disqualification",
        "Public apology",
        "No penalty"
      ],
      correctOption: 1,
      explanation: "Athletes caught using banned substances may face suspension, disqualification, or even a lifetime ban depending on the severity of the violation."
    },
    {
      question: "Which anti-doping measure is often used to test athletes for prohibited substances?",
      options: [
        "Urine analysis",
        "Blood analysis",
        "Saliva tests",
        "Both urine and blood analysis"
      ],
      correctOption: 3,
      explanation: "Anti-doping tests often include both urine and blood analysis to detect banned substances or methods."
    },
    {
      question: "Which of the following is an example of a prohibited stimulant in athletics?",
      options: [
        "Caffeine",
        "Methamphetamine",
        "Creatine",
        "Vitamin B12"
      ],
      correctOption: 1,
      explanation: "Methamphetamine is a prohibited stimulant that enhances performance illegally and can have harmful side effects."
    },
    {
      question: "What does WADA stand for?",
      options: [
        "World Anti-Doping Agency",
        "World Athlete Development Agency",
        "World Association of Doping Athletes",
        "World Association for Drug Alternatives"
      ],
      correctOption: 0,
      explanation: "WADA stands for the World Anti-Doping Agency, which oversees anti-doping regulations and enforcement in all sports."
    },
    {
      question: "What is the primary purpose of a Therapeutic Use Exemption (TUE)?",
      options: [
        "To allow the use of a banned substance for medical reasons",
        "To grant permission to use any substance",
        "To waive the need for drug testing",
        "To allow athletes to enhance their performance"
      ],
      correctOption: 0,
      explanation: "A TUE is granted to allow athletes to use a banned substance or method for legitimate medical reasons."
    }
  ]
  
,  
  cricket: [
    {
      question: "What is doping in cricket?",
      options: [
        "Using performance-enhancing drugs",
        "Using supplements legally",
        "Practicing intensely",
        "Participating in multiple sports"
      ],
      correctOption: 0,
      explanation: "Doping refers to the use of banned substances to improve performance illegally."
    },
    {
      question: "Which organization is responsible for regulating anti-doping in cricket?",
      options: [
        "International Cricket Council (ICC)",
        "World Anti-Doping Agency (WADA)",
        "National Anti-Doping Agency (NADA)",
        "Indian Cricket Control Board (BCCI)"
      ],
      correctOption: 1,
      explanation: "The World Anti-Doping Agency (WADA) is responsible for regulating and monitoring anti-doping efforts globally."
    },
    {
      question: "Which of the following is classified as a prohibited substance in cricket?",
      options: [
        "Creatine",
        "Caffeine",
        "Erythropoietin (EPO)",
        "Whey Protein"
      ],
      correctOption: 2,
      explanation: "Erythropoietin (EPO) is a banned substance due to its ability to increase red blood cells and enhance endurance."
    },
    {
      question: "What is a common reason for athletes to use performance-enhancing drugs?",
      options: [
        "Injury recovery",
        "Increased stamina",
        "Improved mental clarity",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "Performance-enhancing drugs are often used for injury recovery, increased stamina, and mental clarity, although they are banned."
    },
    {
      question: "What should players do if they are unsure about a substance?",
      options: [
        "Take it anyway",
        "Consult the WADA list of prohibited substances",
        "Ask their teammates",
        "Use it in moderation"
      ],
      correctOption: 1,
      explanation: "Players should always consult the WADA list of prohibited substances to ensure they are not taking any banned substances."
    },
    {
      question: "Which of the following is a common method for detecting doping in cricket?",
      options: [
        "Blood tests",
        "Urine tests",
        "Hair follicle tests",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "Doping can be detected through blood tests, urine tests, and hair follicle tests, among other methods."
    },
    {
      question: "What is the penalty for testing positive for doping in cricket?",
      options: [
        "Warning",
        "Suspension",
        "Life ban",
        "All of the above"
      ],
      correctOption: 1,
      explanation: "The penalty for testing positive for doping in cricket often includes a suspension, depending on the severity and circumstances."
    },
    {
      question: "Which substance is commonly misused by cricketers for muscle growth?",
      options: [
        "Anabolic steroids",
        "Beta-alanine",
        "L-carnitine",
        "Glutamine"
      ],
      correctOption: 0,
      explanation: "Anabolic steroids are commonly misused for muscle growth and recovery but are prohibited due to their performance-enhancing effects."
    },
    {
      question: "Can cricketers be tested for doping during any match?",
      options: [
        "Yes, only during international tournaments",
        "No, only during the off-season",
        "Yes, at any time during any competition",
        "Yes, but only during World Cups"
      ],
      correctOption: 2,
      explanation: "Cricketers can be tested for doping at any time, during any competition, as part of anti-doping measures."
    },
    {
      question: "Which of the following can be considered as a potential reason for a positive doping test?",
      options: [
        "Consuming contaminated food supplements",
        "Unintentional intake of banned substances",
        "Improper prescription medication use",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "A positive doping test can result from consuming contaminated supplements, unintentional intake of banned substances, or improper medication use."
    },
    {
      question: "What is the primary role of the ICC Anti-Doping Committee?",
      options: [
        "To enforce doping laws",
        "To manage and conduct doping tests",
        "To organize tournaments",
        "To create policies for player contracts"
      ],
      correctOption: 1,
      explanation: "The ICC Anti-Doping Committee is responsible for managing and conducting doping tests for cricketers."
    },
    {
      question: "Which of the following substances is banned by WADA but allowed in food supplements?",
      options: [
        "Caffeine",
        "Ephedrine",
        "Creatine",
        "Coconut water"
      ],
      correctOption: 1,
      explanation: "Ephedrine is banned by WADA due to its stimulant properties, even though it may be present in some food supplements."
    },
    {
      question: "What does a player's 'B sample' refer to in the context of anti-doping tests?",
      options: [
        "A backup test for accuracy",
        "The first sample taken during a test",
        "A test for blood doping",
        "The final test result"
      ],
      correctOption: 0,
      explanation: "A player's 'B sample' is a backup sample that can be tested for accuracy if the 'A sample' test results are positive."
    },
    {
      question: "What does the term 'blood doping' refer to?",
      options: [
        "Taking substances that enhance red blood cell production",
        "Injecting steroids into the blood",
        "Using illegal drugs to mask performance enhancement",
        "Drinking excessive fluids to stay hydrated"
      ],
      correctOption: 0,
      explanation: "Blood doping refers to the practice of taking substances or performing actions that enhance red blood cell production to improve endurance."
    },
    {
      question: "Which drug is commonly used in cricket for its stimulant effects?",
      options: [
        "Caffeine",
        "Heroin",
        "Methamphetamine",
        "Cocaine"
      ],
      correctOption: 0,
      explanation: "Caffeine is a stimulant often used in cricket for its energy-boosting effects, but it is considered borderline in terms of regulation."
    },
    {
      question: "What is the role of 'WADA' in cricket anti-doping efforts?",
      options: [
        "To provide financial support to cricketers",
        "To monitor and regulate doping in all sports, including cricket",
        "To organize cricket tournaments",
        "To advise players on playing techniques"
      ],
      correctOption: 1,
      explanation: "The World Anti-Doping Agency (WADA) is responsible for monitoring and regulating doping across all sports, including cricket."
    },
    {
      question: "Which type of doping involves altering the body’s oxygen-carrying capacity?",
      options: [
        "Gene doping",
        "Blood doping",
        "Caffeine doping",
        "Protein doping"
      ],
      correctOption: 1,
      explanation: "Blood doping involves increasing the body’s ability to carry oxygen by manipulating red blood cell production or using blood transfusions."
    },
    {
      question: "What is the punishment for a cricketer caught with a banned substance?",
      options: [
        "Warning",
        "Suspension for a few matches",
        "Suspension for a longer duration",
        "Permanent ban"
      ],
      correctOption: 2,
      explanation: "Suspension for a longer duration is a common punishment for cricketers caught with banned substances, depending on the severity of the case."
    },
    {
      question: "Which of the following substances can enhance muscle recovery but is legal in cricket?",
      options: [
        "Creatine",
        "Methamphetamine",
        "Human Growth Hormone",
        "Caffeine"
      ],
      correctOption: 0,
      explanation: "Creatine is a legal supplement often used to improve muscle recovery in cricket, unlike banned substances like Methamphetamine and HGH."
    },
    {
      question: "Which anti-doping procedure is used to detect substances like EPO?",
      options: [
        "Blood test",
        "Urine test",
        "Hair follicle test",
        "All of the above"
      ],
      correctOption: 0,
      explanation: "EPO is commonly detected through blood tests, as it directly affects the body's red blood cell count."
    },
    {
      question: "What is the main aim of anti-doping programs in cricket?",
      options: [
        "To increase player's skills",
        "To promote fair competition",
        "To help players recover faster",
        "To make matches more exciting"
      ],
      correctOption: 1,
      explanation: "The primary aim of anti-doping programs in cricket is to ensure fair competition and maintain the integrity of the sport."
    },
    {
      question: "What does 'TUE' stand for in anti-doping?",
      options: [
        "Test Under Examination",
        "Therapeutic Use Exemption",
        "Test Under Evaluation",
        "Therapeutic Unit Evaluation"
      ],
      correctOption: 1,
      explanation: "TUE stands for Therapeutic Use Exemption, a process through which athletes can use otherwise banned substances for legitimate medical reasons."
    },
    {
      question: "How can players avoid unintentional doping violations?",
      options: [
        "By avoiding over-the-counter supplements",
        "By using substances approved by WADA",
        "By checking the list of banned substances regularly",
        "All of the above"
      ],
      correctOption: 3,
      explanation: "Players can avoid unintentional doping violations by avoiding questionable supplements, using approved substances, and regularly checking WADA’s banned list."
    },
    {
      question: "Which substance, often used by cricketers, is prohibited due to its effects on muscle strength?",
      options: [
        "Anabolic steroids",
        "Vitamin C",
        "Caffeine",
        "Glutamine"
      ],
      correctOption: 0,
      explanation: "Anabolic steroids are prohibited due to their muscle-strengthening effects and are commonly misused by athletes in various sports, including cricket."
    }
  ]
,  
boxing: [
  {
    question: "What is considered doping in boxing?",
    options: [
      "Using performance-enhancing drugs",
      "Using supplements legally",
      "Practicing intensely",
      "Participating in multiple sports"
    ],
    correctOption: 0,
    explanation: "Doping in boxing refers to the use of banned substances to illegally enhance performance."
  },
  {
    question: "Which of the following is a common banned substance in boxing?",
    options: [
      "Caffeine",
      "Cortisone",
      "Vitamin C",
      "Omega-3 supplements"
    ],
    correctOption: 1,
    explanation: "Cortisone is a banned substance in boxing when used without a therapeutic use exemption."
  },
  {
    question: "What does WADA stand for in relation to doping?",
    options: [
      "World Anti-Doping Agency",
      "World Association for Doping Athletics",
      "Wrestling Anti-Doping Authority",
      "World Anti-Association for Drugs"
    ],
    correctOption: 0,
    explanation: "WADA is the World Anti-Doping Agency, responsible for promoting and coordinating the global effort to prevent doping in sports."
  },
  {
    question: "Which of the following is a banned method in boxing?",
    options: [
      "Blood doping",
      "Hydration with electrolytes",
      "Rest and recovery",
      "Protein shakes"
    ],
    correctOption: 0,
    explanation: "Blood doping, which involves increasing the red blood cell count, is a banned method in boxing."
  },
  {
    question: "Which hormone is often misused for enhancing performance in boxing?",
    options: [
      "Testosterone",
      "Insulin",
      "Cortisol",
      "Adrenaline"
    ],
    correctOption: 0,
    explanation: "Testosterone is commonly misused by athletes, including boxers, to improve strength and recovery."
  },
  {
    question: "What is the effect of steroids on a boxer’s performance?",
    options: [
      "Increased muscle mass and strength",
      "Decreased endurance",
      "Slower reaction times",
      "Increased flexibility"
    ],
    correctOption: 0,
    explanation: "Steroids increase muscle mass and strength, giving boxers an unfair advantage."
  },
  {
    question: "Which of the following is not a common side effect of doping in boxing?",
    options: [
      "Hair loss",
      "Increased aggression",
      "Decreased risk of injury",
      "Cardiovascular problems"
    ],
    correctOption: 2,
    explanation: "Doping can lead to side effects like hair loss, increased aggression, and cardiovascular problems, but it doesn't decrease injury risk."
  },
  {
    question: "Which organization is responsible for regulating doping in boxing?",
    options: [
      "WADA",
      "FIBA",
      "FIFA",
      "NBA"
    ],
    correctOption: 0,
    explanation: "WADA (World Anti-Doping Agency) is responsible for regulating doping in all sports, including boxing."
  },
  {
    question: "What is the penalty for a boxer caught doping?",
    options: [
      "Permanent ban from boxing",
      "Temporary suspension",
      "Suspension for a season",
      "Fine"
    ],
    correctOption: 1,
    explanation: "Boxers caught doping are often temporarily suspended, but may face further penalties depending on the situation."
  },
  {
    question: "Which of the following substances is not banned in boxing?",
    options: [
      "Anabolic steroids",
      "Caffeine",
      "Erythropoietin (EPO)",
      "Human growth hormone"
    ],
    correctOption: 1,
    explanation: "Caffeine is not banned in boxing, although it is a stimulant and should be used in moderation."
  },
  {
    question: "What is the role of blood testing in boxing for doping control?",
    options: [
      "Detecting illegal performance-enhancing drugs",
      "Testing for dehydration",
      "Determining a boxer’s weight class",
      "Monitoring cardiovascular health"
    ],
    correctOption: 0,
    explanation: "Blood testing in boxing helps detect the use of banned performance-enhancing substances."
  },
  {
    question: "Which of the following substances is used to mask the presence of other banned substances in the body?",
    options: [
      "Diuretics",
      "Caffeine",
      "Anabolic steroids",
      "Glucosamine"
    ],
    correctOption: 0,
    explanation: "Diuretics are used to mask the presence of other banned substances in the body, which is why they are banned."
  },
  {
    question: "What is the penalty for a first-time offense of doping in boxing?",
    options: [
      "Lifetime ban",
      "Six-month suspension",
      "One-year suspension",
      "Warning and fine"
    ],
    correctOption: 2,
    explanation: "A first-time offense in boxing usually results in a one-year suspension, although the penalty may vary."
  },
  {
    question: "What is the typical effect of Erythropoietin (EPO) abuse in boxing?",
    options: [
      "Increased endurance",
      "Increased muscle mass",
      "Decreased heart rate",
      "Enhanced strength"
    ],
    correctOption: 0,
    explanation: "Erythropoietin (EPO) boosts the production of red blood cells, which increases endurance by improving oxygen delivery to muscles."
  },
  {
    question: "Which of these supplements is legal in boxing?",
    options: [
      "Creatine",
      "Erythropoietin (EPO)",
      "Blood doping",
      "Testosterone"
    ],
    correctOption: 0,
    explanation: "Creatine is a legal supplement used to improve strength and muscle mass, whereas substances like EPO and testosterone are banned."
  },
  {
    question: "How long does a typical doping ban last for a boxer?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "Lifetime"
    ],
    correctOption: 1,
    explanation: "A typical doping ban for a boxer lasts for 3 years, although it can be longer depending on the severity of the offense."
  },
  {
    question: "What is the primary method used for detecting doping in boxing?",
    options: [
      "Urine testing",
      "DNA testing",
      "Physical exams",
      "Eye exams"
    ],
    correctOption: 0,
    explanation: "Urine testing is the primary method used to detect banned substances in boxing."
  },
  {
    question: "Which of the following can be considered a banned substance in boxing?",
    options: [
      "Caffeine",
      "Anabolic steroids",
      "Electrolyte drinks",
      "Vitamin B12"
    ],
    correctOption: 1,
    explanation: "Anabolic steroids are banned substances in boxing, as they provide an unfair advantage."
  },
  {
    question: "Why are substances like diuretics banned in boxing?",
    options: [
      "They help with weight loss",
      "They improve endurance",
      "They mask the presence of other banned substances",
      "They increase strength"
    ],
    correctOption: 2,
    explanation: "Diuretics are banned because they can mask the presence of other banned substances in the body."
  },
  {
    question: "Which of the following is true about using performance-enhancing drugs in boxing?",
    options: [
      "It is a common practice",
      "It is always detected during testing",
      "It is against the rules and can result in a ban",
      "It is allowed with a doctor's prescription"
    ],
    correctOption: 2,
    explanation: "Using performance-enhancing drugs is against the rules in boxing and can result in a ban if caught."
  },
  {
    question: "What does 'therapeutic use exemption' mean in the context of boxing?",
    options: [
      "A doctor’s note allows a boxer to use banned substances",
      "A boxer is allowed to use drugs without any consequences",
      "It allows a boxer to recover faster after injuries",
      "A boxer must avoid any drugs at all costs"
    ],
    correctOption: 0,
    explanation: "A therapeutic use exemption allows athletes to use certain banned substances for legitimate medical purposes, with approval."
  },
  {
    question: "Which of the following is a consequence of excessive steroid use in boxing?",
    options: [
      "Increased risk of heart disease",
      "Improved cardiovascular endurance",
      "Better recovery after matches",
      "Enhanced flexibility"
    ],
    correctOption: 0,
    explanation: "Excessive steroid use increases the risk of heart disease and other health problems."
  },
  {
    question: "Which of these is an example of doping in boxing?",
    options: [
      "Taking over-the-counter vitamins",
      "Using an illegal performance-enhancing drug like EPO",
      "Eating protein-rich food",
      "Hydrating with water"
    ],
    correctOption: 1,
    explanation: "Using Erythropoietin (EPO), an illegal performance-enhancing drug, is considered doping in boxing."
  },
  {
    question: "Why is it important for boxers to adhere to anti-doping regulations?",
    options: [
      "To ensure fair competition",
      "To avoid injury",
      "To improve stamina",
      "To improve technique"
    ],
    correctOption: 0,
    explanation: "Adhering to anti-doping regulations ensures fair competition and upholds the integrity of the sport."
  },
  {
    question: "Which of the following is an effect of blood doping in boxing?",
    options: [
      "Increased red blood cell count and endurance",
      "Increased muscle mass and strength",
      "Decreased oxygen intake",
      "Improved reflexes"
    ],
    correctOption: 0,
    explanation: "Blood doping increases the red blood cell count, which improves endurance by enhancing oxygen delivery to muscles."
  }
],
weightlifting: [
  {
    question: "What is the primary goal of weightlifting?",
    options: [
      "To improve flexibility",
      "To increase muscle strength and endurance",
      "To enhance cardiovascular fitness",
      "To increase stamina"
    ],
    correctOption: 1,
    explanation: "The primary goal of weightlifting is to increase muscle strength and endurance by lifting progressively heavier weights."
  },
  {
    question: "Which of the following is a common banned substance in weightlifting?",
    options: [
      "Caffeine",
      "Anabolic steroids",
      "Creatine",
      "BCAAs"
    ],
    correctOption: 1,
    explanation: "Anabolic steroids are banned in weightlifting as they enhance muscle growth and performance unfairly."
  },
  {
    question: "What does WADA stand for in the context of weightlifting?",
    options: [
      "World Anti-Doping Agency",
      "World Athletic Doping Association",
      "Weightlifting Anti-Doping Agency",
      "World Alliance for Doping Awareness"
    ],
    correctOption: 0,
    explanation: "WADA stands for World Anti-Doping Agency, which coordinates the global effort to prevent doping in sports, including weightlifting."
  },
  {
    question: "Which of the following is a banned method in weightlifting?",
    options: [
      "Blood doping",
      "Hydration with electrolytes",
      "Protein supplementation",
      "Stretching before lifts"
    ],
    correctOption: 0,
    explanation: "Blood doping, which involves increasing red blood cell count to improve oxygen delivery, is banned in weightlifting."
  },
  {
    question: "Which substance is commonly used to increase strength and muscle mass in weightlifting, but is banned?",
    options: [
      "Testosterone",
      "Glutamine",
      "Omega-3 fatty acids",
      "BCAAs"
    ],
    correctOption: 0,
    explanation: "Testosterone is a banned substance in weightlifting when used to enhance muscle mass and strength."
  },
  {
    question: "What is the effect of anabolic steroids on a weightlifter’s performance?",
    options: [
      "Increased muscle mass and strength",
      "Decreased endurance",
      "Improved flexibility",
      "Slower recovery time"
    ],
    correctOption: 0,
    explanation: "Anabolic steroids increase muscle mass and strength, improving a weightlifter’s performance."
  },
  {
    question: "What is the role of protein supplements in weightlifting?",
    options: [
      "To build muscle and speed up recovery",
      "To enhance flexibility",
      "To increase body fat",
      "To reduce cardiovascular risk"
    ],
    correctOption: 0,
    explanation: "Protein supplements are commonly used to build muscle and aid in recovery after weightlifting sessions."
  },
  {
    question: "Which of the following is a legal and effective supplement for weightlifters?",
    options: [
      "Creatine",
      "Erythropoietin (EPO)",
      "Blood doping",
      "Testosterone"
    ],
    correctOption: 0,
    explanation: "Creatine is a legal and commonly used supplement that helps improve strength and performance in weightlifting."
  },
  {
    question: "What is the penalty for testing positive for banned substances in weightlifting?",
    options: [
      "Lifetime ban",
      "Temporary suspension",
      "Warning",
      "Fine"
    ],
    correctOption: 1,
    explanation: "Athletes who test positive for banned substances in weightlifting typically face a temporary suspension."
  },
  {
    question: "Which of the following substances is NOT banned in weightlifting?",
    options: [
      "Caffeine",
      "Anabolic steroids",
      "Erythropoietin (EPO)",
      "Human growth hormone"
    ],
    correctOption: 0,
    explanation: "Caffeine is legal in weightlifting, although it is a stimulant and should be used in moderation."
  },
  {
    question: "What is the purpose of urine testing in weightlifting?",
    options: [
      "To detect illegal performance-enhancing drugs",
      "To measure muscle growth",
      "To track hydration levels",
      "To determine body fat percentage"
    ],
    correctOption: 0,
    explanation: "Urine testing is used to detect banned substances in weightlifting and other sports."
  },
  {
    question: "Which of the following substances is used to mask the presence of other banned substances in weightlifting?",
    options: [
      "Diuretics",
      "Caffeine",
      "Creatine",
      "Vitamin B12"
    ],
    correctOption: 0,
    explanation: "Diuretics are used to mask the presence of banned substances in the body, which is why they are banned."
  },
  {
    question: "What is the typical duration of a doping ban for a weightlifter caught using performance-enhancing drugs?",
    options: [
      "1 year",
      "2 years",
      "4 years",
      "Lifetime"
    ],
    correctOption: 1,
    explanation: "A typical doping ban for a weightlifter lasts 2 years, though it can vary based on the severity of the offense."
  },
  {
    question: "Which hormone is commonly abused by weightlifters to enhance muscle growth?",
    options: [
      "Testosterone",
      "Insulin",
      "Erythropoietin (EPO)",
      "Cortisol"
    ],
    correctOption: 0,
    explanation: "Testosterone is often abused to increase muscle mass and strength in weightlifting."
  },
  {
    question: "Which of these methods is considered a form of illegal performance enhancement in weightlifting?",
    options: [
      "Using anabolic steroids",
      "Consuming protein shakes",
      "Engaging in regular stretching",
      "Hydration with water"
    ],
    correctOption: 0,
    explanation: "Using anabolic steroids to enhance muscle growth and strength is illegal in weightlifting."
  },
  {
    question: "What is the primary reason for banning substances like EPO in weightlifting?",
    options: [
      "It increases red blood cell production and endurance",
      "It increases strength without effort",
      "It helps in fat loss",
      "It improves flexibility"
    ],
    correctOption: 0,
    explanation: "EPO increases red blood cell production, which enhances endurance, giving athletes an unfair advantage."
  },
  {
    question: "What is the effect of blood doping in weightlifting?",
    options: [
      "Increased endurance and strength",
      "Decreased strength",
      "Increased flexibility",
      "Decreased cardiovascular performance"
    ],
    correctOption: 0,
    explanation: "Blood doping increases endurance by improving oxygen delivery to muscles and increases strength."
  },
  {
    question: "Which of the following substances is commonly used for muscle recovery after weightlifting?",
    options: [
      "Glutamine",
      "Erythropoietin (EPO)",
      "Human growth hormone",
      "Anabolic steroids"
    ],
    correctOption: 0,
    explanation: "Glutamine is commonly used for muscle recovery after intense weightlifting sessions."
  },
  {
    question: "What is the most common method for detecting banned substances in weightlifting?",
    options: [
      "Urine testing",
      "Blood testing",
      "DNA testing",
      "Physical exams"
    ],
    correctOption: 0,
    explanation: "Urine testing is the most common method for detecting banned substances in weightlifting."
  },
  {
    question: "What are the risks of abusing anabolic steroids in weightlifting?",
    options: [
      "Heart disease, liver damage, and infertility",
      "Improved flexibility",
      "Increased endurance",
      "Improved cardiovascular fitness"
    ],
    correctOption: 0,
    explanation: "Abusing anabolic steroids can lead to serious health risks like heart disease, liver damage, and infertility."
  },
  {
    question: "Why is it important for weightlifters to follow anti-doping regulations?",
    options: [
      "To maintain fair competition and prevent health risks",
      "To reduce injury rates",
      "To improve technique",
      "To increase muscle mass"
    ],
    correctOption: 0,
    explanation: "Adhering to anti-doping regulations ensures fair competition and helps prevent health risks associated with banned substances."
  },
  {
    question: "Which of the following is a potential side effect of EPO abuse in weightlifting?",
    options: [
      "Increased endurance",
      "Decreased risk of injury",
      "Improved flexibility",
      "Increased muscle size"
    ],
    correctOption: 0,
    explanation: "Erythropoietin (EPO) is used to increase endurance by boosting the production of red blood cells."
  },
  {
    question: "What is the most effective way for weightlifters to enhance their performance legally?",
    options: [
      "Proper nutrition, rest, and legal supplements like creatine",
      "Taking anabolic steroids",
      "Using EPO to increase endurance",
      "Blood doping"
    ],
    correctOption: 0,
    explanation: "Proper nutrition, rest, and legal supplements like creatine are the most effective and safe ways to enhance performance in weightlifting."
  },
  {
    question: "What is the role of carbohydrates in weightlifting performance?",
    options: [
      "They provide energy for short bursts of intense activity",
      "They increase muscle mass",
      "They improve flexibility",
      "They prevent fatigue"
    ],
    correctOption: 0,
    explanation: "Carbohydrates provide energy for high-intensity activities like weightlifting by replenishing glycogen stores in muscles."
  }
],
wrestling: [
  {
    question: "Which of the following is a primary skill required in wrestling?",
    options: [
      "Endurance and strength",
      "Speed and flexibility",
      "Coordination and agility",
      "Balance and technique"
    ],
    correctOption: 3,
    explanation: "Balance and technique are essential skills for a wrestler to perform effective maneuvers and hold positions."
  },
  {
    question: "What is the purpose of weight classes in wrestling?",
    options: [
      "To ensure fairness by matching competitors of similar body mass",
      "To increase competition",
      "To make the sport more entertaining",
      "To test different endurance levels"
    ],
    correctOption: 0,
    explanation: "Weight classes are used in wrestling to ensure fairness by matching competitors who are of similar body mass and weight."
  },
  {
    question: "Which of the following is a common banned substance in wrestling?",
    options: [
      "Caffeine",
      "Anabolic steroids",
      "Creatine",
      "Vitamin C"
    ],
    correctOption: 1,
    explanation: "Anabolic steroids are banned in wrestling due to their potential to enhance strength unfairly."
  },
  {
    question: "What does WADA stand for in the context of wrestling?",
    options: [
      "World Anti-Doping Agency",
      "Wrestling Anti-Doping Association",
      "World Athlete Development Association",
      "Wrestling Association for Doping Awareness"
    ],
    correctOption: 0,
    explanation: "WADA stands for the World Anti-Doping Agency, which helps to enforce anti-doping regulations in wrestling and other sports."
  },
  {
    question: "Which of the following is considered a legal supplement for wrestlers?",
    options: [
      "Creatine",
      "Anabolic steroids",
      "Erythropoietin (EPO)",
      "Blood doping"
    ],
    correctOption: 0,
    explanation: "Creatine is a legal supplement that helps wrestlers increase strength and performance during high-intensity exercises."
  },
  {
    question: "What is the primary role of the referee in a wrestling match?",
    options: [
      "To enforce rules and ensure safety",
      "To judge the technical skill of the competitors",
      "To give instructions to the athletes",
      "To prevent injuries"
    ],
    correctOption: 0,
    explanation: "The referee ensures that both competitors follow the rules and helps maintain a fair and safe environment during the match."
  },
  {
    question: "What does the 'pin' mean in wrestling?",
    options: [
      "To force the opponent’s back on the mat for a count",
      "To perform a takedown",
      "To escape from an opponent’s hold",
      "To execute a submission move"
    ],
    correctOption: 0,
    explanation: "A 'pin' occurs when a wrestler forces their opponent’s back to the mat for a specific count, leading to a victory."
  },
  {
    question: "Which of the following substances is banned in wrestling due to its performance-enhancing effects?",
    options: [
      "Anabolic steroids",
      "Carbohydrates",
      "Protein shakes",
      "Glutamine"
    ],
    correctOption: 0,
    explanation: "Anabolic steroids are banned in wrestling as they artificially enhance muscle mass and strength."
  },
  {
    question: "What is the effect of blood doping in wrestling?",
    options: [
      "Increased endurance by boosting red blood cell count",
      "Improved flexibility",
      "Increased muscle strength",
      "Improved recovery time"
    ],
    correctOption: 0,
    explanation: "Blood doping increases the number of red blood cells, improving oxygen delivery to muscles and enhancing endurance."
  },
  {
    question: "Which of the following is a common legal supplement used to aid recovery after wrestling matches?",
    options: [
      "BCAAs (Branched-Chain Amino Acids)",
      "Anabolic steroids",
      "Blood doping",
      "Erythropoietin (EPO)"
    ],
    correctOption: 0,
    explanation: "BCAAs are commonly used to aid muscle recovery after wrestling matches by reducing muscle soreness and promoting repair."
  },
  {
    question: "What does a wrestler’s victory in a match depend on?",
    options: [
      "Pinning the opponent’s back to the mat",
      "A submission hold",
      "Using an illegal move",
      "Outlasting the opponent’s endurance"
    ],
    correctOption: 0,
    explanation: "In wrestling, a victory is typically earned by pinning the opponent’s back to the mat, making them unable to escape."
  },
  {
    question: "Which of the following is a banned method for increasing strength in wrestling?",
    options: [
      "Using anabolic steroids",
      "Using protein powder",
      "Using creatine",
      "Consuming amino acids"
    ],
    correctOption: 0,
    explanation: "Anabolic steroids are banned in wrestling because they artificially increase muscle mass and strength."
  },
  {
    question: "What is the purpose of weight cutting in wrestling?",
    options: [
      "To meet the requirements of a specific weight class",
      "To increase muscle mass",
      "To improve cardiovascular health",
      "To enhance flexibility"
    ],
    correctOption: 0,
    explanation: "Weight cutting is used by wrestlers to reduce body weight in order to compete in a lower weight class."
  },
  {
    question: "Which type of wrestling is included in the Olympic Games?",
    options: [
      "Freestyle and Greco-Roman wrestling",
      "Judo",
      "Boxing",
      "Taekwondo"
    ],
    correctOption: 0,
    explanation: "Both freestyle and Greco-Roman wrestling are included in the Olympic Games, with each having different rules and techniques."
  },
  {
    question: "What is the term for a move in wrestling where one wrestler lifts and throws the other to the mat?",
    options: [
      "Takedown",
      "Throw",
      "Suplex",
      "Pin"
    ],
    correctOption: 2,
    explanation: "A suplex is a move where a wrestler lifts their opponent and throws them to the mat."
  },
  {
    question: "What is the function of the protective headgear in wrestling?",
    options: [
      "To protect the head and ears from injury",
      "To increase strength",
      "To enhance agility",
      "To improve vision"
    ],
    correctOption: 0,
    explanation: "Protective headgear is used in wrestling to prevent head and ear injuries, ensuring safety during matches."
  },
  {
    question: "What does the term 'escape' refer to in wrestling?",
    options: [
      "Breaking free from an opponent's control on the mat",
      "A method of scoring points",
      "Pinning an opponent",
      "A type of submission move"
    ],
    correctOption: 0,
    explanation: "'Escape' refers to a wrestler breaking free from an opponent’s hold or control while on the mat, often earning points."
  },
  {
    question: "What is the 'single leg takedown' move in wrestling?",
    options: [
      "A move where one wrestler grabs the opponent’s leg and forces them to the mat",
      "A move where the wrestler lifts their opponent and spins them",
      "A move where the wrestler pins the opponent’s back to the mat",
      "A move to escape from a submission"
    ],
    correctOption: 0,
    explanation: "A single leg takedown involves grabbing one of the opponent’s legs and using it to bring them down to the mat."
  },
  {
    question: "Which of the following is a key technique in Greco-Roman wrestling?",
    options: [
      "Attacking above the waist only",
      "Leg attacks",
      "Submissions",
      "High kicks"
    ],
    correctOption: 0,
    explanation: "Greco-Roman wrestling only allows attacks above the waist, unlike freestyle wrestling, which permits leg attacks."
  },
  {
    question: "Which of the following is NOT allowed in wrestling?",
    options: [
      "Striking or hitting",
      "Holding the opponent’s wrist",
      "Pinning the opponent’s back",
      "Escaping from holds"
    ],
    correctOption: 0,
    explanation: "Striking or hitting the opponent is prohibited in wrestling. Only grappling techniques are allowed."
  },
  {
    question: "What is the maximum number of points a wrestler can score for a 'pin'?",
    options: [
      "6 points",
      "4 points",
      "2 points",
      "10 points"
    ],
    correctOption: 0,
    explanation: "In most styles of wrestling, pinning the opponent results in 6 points being awarded."
  },
  {
    question: "How does a wrestler score points in a match?",
    options: [
      "By executing moves like takedowns, escapes, and pins",
      "By striking the opponent",
      "By forcing the opponent to submit",
      "By disqualifying the opponent"
    ],
    correctOption: 0,
    explanation: "Points in wrestling are scored by executing moves like takedowns, escapes, and pins, as well as controlling the opponent."
  },
  {
    question: "What is the role of the coach in wrestling?",
    options: [
      "To guide and train wrestlers for optimal performance",
      "To referee the match",
      "To participate in the match",
      "To judge the competitors"
    ],
    correctOption: 0,
    explanation: "A coach’s primary role is to guide and train wrestlers, providing strategies for optimal performance and technique."
  },
  {
    question: "What is the role of a weight monitor in wrestling?",
    options: [
      "To ensure wrestlers compete in the appropriate weight class",
      "To train the wrestlers",
      "To referee the match",
      "To provide recovery tips"
    ],
    correctOption: 0,
    explanation: "A weight monitor ensures that wrestlers make the weight limit for their class and do not compete outside their designated category."
  },
  {
    question: "Which of the following techniques is used to improve a wrestler’s balance?",
    options: [
      "Stance adjustments",
      "Leg locks",
      "Chokes",
      "Eye pokes"
    ],
    correctOption: 0,
    explanation: "Stance adjustments and maintaining good posture are essential for balance and stability in wrestling."
  }
],
soccer: [
  {
    question: "What is the maximum number of players a football team can have on the field at one time?",
    options: [
      "11 players",
      "12 players",
      "10 players",
      "9 players"
    ],
    correctOption: 0,
    explanation: "A football team can have a maximum of 11 players on the field at one time, including the goalkeeper."
  },
  {
    question: "Which of the following is NOT a position in football?",
    options: [
      "Goalkeeper",
      "Midfielder",
      "Offensive lineman",
      "Defender"
    ],
    correctOption: 2,
    explanation: "In football, there is no position called offensive lineman. It is a term used in American football, not soccer."
  },
  {
    question: "What is the purpose of the offside rule in football?",
    options: [
      "To prevent players from being too close to the goalkeeper",
      "To stop players from getting an unfair advantage by positioning themselves too close to the opponent’s goal",
      "To penalize players for unsporting behavior",
      "To ensure teams are evenly matched"
    ],
    correctOption: 1,
    explanation: "The offside rule prevents players from gaining an unfair advantage by positioning themselves too close to the opponent's goal during an attack."
  },
  {
    question: "Which of the following is a commonly banned substance in football?",
    options: [
      "Caffeine",
      "Anabolic steroids",
      "Creatine",
      "Vitamin C"
    ],
    correctOption: 1,
    explanation: "Anabolic steroids are banned in football because they enhance performance by artificially increasing muscle mass and strength."
  },
  {
    question: "Which of the following is a common legal supplement used by football players?",
    options: [
      "Protein powder",
      "Anabolic steroids",
      "Erythropoietin (EPO)",
      "Blood doping"
    ],
    correctOption: 0,
    explanation: "Protein powder is a legal supplement commonly used by football players to support muscle recovery and growth."
  },
  {
    question: "How long is a standard football match?",
    options: [
      "90 minutes",
      "120 minutes",
      "60 minutes",
      "80 minutes"
    ],
    correctOption: 0,
    explanation: "A standard football match consists of two 45-minute halves, totaling 90 minutes of play."
  },
  {
    question: "What is the primary role of a goalkeeper in football?",
    options: [
      "To score goals",
      "To defend the goal and prevent the opposing team from scoring",
      "To pass the ball",
      "To assist in attacking"
    ],
    correctOption: 1,
    explanation: "The goalkeeper's primary role is to defend the goal by preventing the opposing team from scoring."
  },
  {
    question: "What is the 'penalty box' used for in football?",
    options: [
      "To penalize players for fouls",
      "To restrict players to a specific area during free kicks",
      "To allow the goalkeeper to handle the ball within it",
      "To stop the game during injury"
    ],
    correctOption: 2,
    explanation: "The penalty box is the area where the goalkeeper is allowed to handle the ball, and where fouls committed by the defending team result in a penalty kick."
  },
  {
    question: "What is the maximum number of substitutions a team is allowed to make during a football match?",
    options: [
      "3 substitutions",
      "5 substitutions",
      "7 substitutions",
      "Unlimited substitutions"
    ],
    correctOption: 1,
    explanation: "A team is allowed up to 5 substitutions in a match, though this can vary based on competition rules."
  },
  {
    question: "What is a 'corner kick' in football?",
    options: [
      "A free kick awarded when the ball goes over the goal line last touched by a player from the defending team",
      "A penalty awarded for a foul in the penalty area",
      "A kick taken from the center circle to start the game",
      "A kick taken from the edge of the field to restart the match"
    ],
    correctOption: 0,
    explanation: "A corner kick is awarded when the ball goes over the goal line last touched by a player from the defending team, excluding the goalkeeper."
  },
  {
    question: "What is the main purpose of the offside rule?",
    options: [
      "To encourage aggressive attacking play",
      "To prevent players from waiting near the opponent's goal for a pass",
      "To ensure a balanced team formation",
      "To penalize time-wasting"
    ],
    correctOption: 1,
    explanation: "The offside rule is intended to prevent players from positioning themselves too close to the opponent’s goal to gain an unfair advantage."
  },
  {
    question: "Which of the following players is NOT allowed to handle the ball in a football match?",
    options: [
      "Goalkeeper",
      "Midfielder",
      "Defender",
      "Forward"
    ],
    correctOption: 1,
    explanation: "Only the goalkeeper is allowed to handle the ball within their penalty area. All other players must use their feet, head, or chest."
  },
  {
    question: "Which of the following is a banned substance in football?",
    options: [
      "Caffeine",
      "Anabolic steroids",
      "Creatine",
      "Protein powder"
    ],
    correctOption: 1,
    explanation: "Anabolic steroids are banned in football due to their performance-enhancing effects and potential harm to the player's health."
  },
  {
    question: "What is the maximum number of players on the field for a team during a football match?",
    options: [
      "11 players",
      "12 players",
      "10 players",
      "9 players"
    ],
    correctOption: 0,
    explanation: "Each football team is allowed to have 11 players on the field, including the goalkeeper."
  },
  {
    question: "What happens when a football match ends in a draw during knockout-stage tournaments?",
    options: [
      "The match is replayed",
      "A penalty shootout is held",
      "Extra time is played",
      "The team with the most yellow cards wins"
    ],
    correctOption: 1,
    explanation: "In knockout-stage tournaments, if a match ends in a draw, a penalty shootout is held to determine the winner."
  },
  {
    question: "Which of the following is a legal move for a football player?",
    options: [
      "Kicking an opponent",
      "Challenging for the ball with a fair tackle",
      "Using the hands to control the ball",
      "Pushing an opponent from behind"
    ],
    correctOption: 1,
    explanation: "Challenging for the ball with a fair tackle is a legal move in football, as long as it is done without dangerous play."
  },
  {
    question: "In what situation is a player awarded a free kick in football?",
    options: [
      "When the ball goes out of bounds",
      "When a player commits a foul or handles the ball",
      "When the goalkeeper scores a goal",
      "When a player scores an own goal"
    ],
    correctOption: 1,
    explanation: "A free kick is awarded when a player commits a foul, such as a handball or a tackle from behind."
  },
  {
    question: "How is the winner of a football match determined?",
    options: [
      "By the number of goals scored",
      "By the number of fouls committed",
      "By the number of yellow cards",
      "By the number of corners"
    ],
    correctOption: 0,
    explanation: "The winner of a football match is determined by the number of goals scored by each team during the match."
  },
  {
    question: "What is a 'red card' in football?",
    options: [
      "A warning for unsporting behavior",
      "A penalty for fouls inside the penalty area",
      "A send-off for serious foul play or violent conduct",
      "A signal to start the match"
    ],
    correctOption: 2,
    explanation: "A red card is shown to a player for serious fouls or violent conduct, leading to their immediate dismissal from the game."
  },
  {
    question: "What does 'extra time' refer to in football?",
    options: [
      "An additional time added for injuries",
      "A sudden-death penalty shootout",
      "Extra minutes added to decide the winner in case of a draw",
      "An additional half-time period"
    ],
    correctOption: 2,
    explanation: "Extra time is used to decide the winner in knockout-stage matches if the score is tied at the end of regular time."
  },
  {
    question: "What does the 'yellow card' signify in football?",
    options: [
      "A warning for a minor foul",
      "A penalty for violent conduct",
      "A send-off for serious foul play",
      "A goal scored"
    ],
    correctOption: 0,
    explanation: "A yellow card is a warning given to a player for a minor foul or unsporting behavior. A second yellow card results in a red card."
  },
  {
    question: "How is the 'kick-off' restarted after a goal is scored?",
    options: [
      "The game restarts from the center circle",
      "The ball is kicked from the goal line",
      "The game restarts with a throw-in",
      "The team that conceded the goal gets possession"
    ],
    correctOption: 0,
    explanation: "After a goal is scored, the game restarts with a kick-off from the center circle by the team that conceded the goal."
  },
  {
    question: "Which of the following is a legal action in football?",
    options: [
      "Headbutting the opponent",
      "A fair tackle for the ball",
      "Kicking the opponent"
    ],
    correctOption: 1,
    explanation: "A fair tackle for the ball is legal, as long as it is done without dangerous play or using excessive force."
  },
  {
    question: "What is a 'throw-in' used for in football?",
    options: [
      "To restart the game after the ball goes out of bounds",
      "To award a penalty for a foul",
      "To score a goal",
      "To pass the ball to the opponent"
    ],
    correctOption: 0,
    explanation: "A throw-in is awarded to the team that did not touch the ball last when it goes out of bounds on the touchline."
  }
],
cycling: [
  {
    question: "What is the most common type of bicycle used for road racing?",
    options: [
      "Mountain bike",
      "Hybrid bike",
      "Road bike",
      "Cruiser bike"
    ],
    correctOption: 2,
    explanation: "Road bikes are the most common type of bicycle used for road racing due to their lightweight design and aerodynamic features."
  },
  {
    question: "Which of the following is NOT a common cycling race format?",
    options: [
      "Time trial",
      "Criterium",
      "Marathon",
      "Stage race"
    ],
    correctOption: 2,
    explanation: "A marathon is not typically a cycling race format, while time trials, criteriums, and stage races are common."
  },
  {
    question: "What is the purpose of the gear system on a bicycle?",
    options: [
      "To increase the size of the wheels",
      "To adjust the saddle height",
      "To make pedaling easier or harder depending on terrain",
      "To steer the bike"
    ],
    correctOption: 2,
    explanation: "The gear system on a bicycle allows the rider to adjust the pedaling resistance, making it easier or harder to pedal depending on the terrain."
  },
  {
    question: "Which of the following is a key factor in a cyclist’s speed?",
    options: [
      "Tire pressure",
      "Pedal cadence",
      "Wind resistance",
      "All of the above"
    ],
    correctOption: 3,
    explanation: "Tire pressure, pedal cadence, and wind resistance are all key factors that influence a cyclist’s speed."
  },
  {
    question: "What is the primary purpose of a cycling helmet?",
    options: [
      "To reduce wind resistance",
      "To protect the head in case of a crash",
      "To increase visibility",
      "To provide comfort while riding"
    ],
    correctOption: 1,
    explanation: "The primary purpose of a cycling helmet is to protect the rider’s head in case of a fall or crash."
  },
  {
    question: "Which type of cycling is commonly done on mountainous terrain?",
    options: [
      "Road cycling",
      "Track cycling",
      "Mountain biking",
      "BMX cycling"
    ],
    correctOption: 2,
    explanation: "Mountain biking is commonly done on mountainous terrain and includes rugged trails and obstacles."
  },
  {
    question: "What is a 'peloton' in road racing?",
    options: [
      "The front rider",
      "The group of cyclists riding together in a pack",
      "The race official vehicle",
      "The finish line"
    ],
    correctOption: 1,
    explanation: "A peloton refers to the group of cyclists riding together in a pack, usually to conserve energy and reduce wind resistance."
  },
  {
    question: "What is a 'time trial' race?",
    options: [
      "A race where cyclists compete in teams",
      "A race against the clock, with each cyclist racing individually",
      "A race with multiple stages",
      "A race on a closed circuit"
    ],
    correctOption: 1,
    explanation: "In a time trial, each cyclist races individually against the clock rather than against other competitors."
  },
  {
    question: "What is the main advantage of riding in a 'draft' behind another cyclist?",
    options: [
      "Increased speed",
      "Reduced wind resistance",
      "Higher energy consumption",
      "Better control of the bicycle"
    ],
    correctOption: 1,
    explanation: "Riding in a draft behind another cyclist reduces wind resistance, which helps conserve energy and allows for higher speeds."
  },
  {
    question: "Which of the following is a common cycling injury?",
    options: [
      "Fractured wrist",
      "Sprained ankle",
      "Concussion",
      "All of the above"
    ],
    correctOption: 3,
    explanation: "Cycling injuries can include fractured wrists, sprained ankles, and concussions, especially in crashes."
  },
  {
    question: "What is a 'fixie' bicycle?",
    options: [
      "A bicycle with gears",
      "A single-speed bicycle with no freewheel mechanism",
      "A folding bicycle",
      "A hybrid bicycle"
    ],
    correctOption: 1,
    explanation: "A 'fixie' bicycle is a single-speed bike with no freewheel mechanism, meaning the pedals are always in motion when the wheels are turning."
  },
  {
    question: "What does the term 'cadence' refer to in cycling?",
    options: [
      "The frequency of gear changes",
      "The rhythm of pedaling",
      "The tire pressure",
      "The speed of the bicycle"
    ],
    correctOption: 1,
    explanation: "Cadence refers to the rhythm or speed of pedaling, usually measured in revolutions per minute (RPM)."
  },
  {
    question: "Which cycling event is held on a velodrome?",
    options: [
      "Mountain biking",
      "Track cycling",
      "Road racing",
      "Time trials"
    ],
    correctOption: 1,
    explanation: "Track cycling events are held on a velodrome, a specially designed oval track."
  },
  {
    question: "What does 'double bonk' refer to in cycling?",
    options: [
      "Cycling without brakes",
      "Experiencing two instances of fatigue during a race",
      "Hitting the handlebars twice in a crash",
      "Having two flat tires in one race"
    ],
    correctOption: 1,
    explanation: "A 'double bonk' refers to a situation where a cyclist experiences two instances of fatigue, often caused by improper nutrition or overexertion."
  },
  {
    question: "What is 'chamois cream' used for in cycling?",
    options: [
      "To lubricate the bike chain",
      "To protect the skin from saddle sores",
      "To clean the helmet",
      "To protect the bicycle tires"
    ],
    correctOption: 1,
    explanation: "Chamois cream is used to reduce friction and prevent saddle sores during long rides."
  },
  {
    question: "Which type of bicycle tire is most commonly used in road cycling?",
    options: [
      "Knobby tires",
      "Smooth tires",
      "Cross tires",
      "Fat tires"
    ],
    correctOption: 1,
    explanation: "Smooth tires are most commonly used in road cycling to minimize rolling resistance and maximize speed."
  },
  {
    question: "What is 'spinning' in the context of cycling?",
    options: [
      "A type of stationary bike workout",
      "A racing technique in time trials",
      "A type of mountain bike race",
      "Cycling in a group"
    ],
    correctOption: 0,
    explanation: "'Spinning' refers to indoor cycling workouts done on stationary bikes, often in a group setting with music and an instructor."
  },
  {
    question: "What does 'bonking' mean in cycling?",
    options: [
      "Riding with low tire pressure",
      "Experiencing severe fatigue due to lack of energy",
      "Having a flat tire",
      "Speeding in a race"
    ],
    correctOption: 1,
    explanation: "Bonking refers to severe fatigue caused by running out of energy, often due to inadequate nutrition or hydration during long rides."
  },
  {
    question: "Which of the following is an essential safety gear for cyclists?",
    options: [
      "Cycling gloves",
      "Cycling shoes",
      "Helmet",
      "Water bottle"
    ],
    correctOption: 2,
    explanation: "A helmet is an essential safety gear for cyclists to protect the head in case of a fall or collision."
  },
  {
    question: "What does the term 'saddle height' refer to in cycling?",
    options: [
      "The height of the bike's seat",
      "The height of the handlebars",
      "The length of the pedals",
      "The weight of the bike"
    ],
    correctOption: 0,
    explanation: "Saddle height refers to the height of the bike's seat, which should be adjusted for comfort and proper leg extension."
  },
  {
    question: "Which of the following is a common sign of dehydration in cyclists?",
    options: [
      "Excessive sweating",
      "Thirst and dry mouth",
      "Increased energy levels",
      "All of the above"
    ],
    correctOption: 1,
    explanation: "Thirst and dry mouth are common signs of dehydration, which can impair performance and recovery."
  },
  {
    question: "What is 'bikepacking'?",
    options: [
      "Racing on a mountain bike",
      "Long-distance cycling with camping gear",
      "Riding in a peloton",
      "Training for competitive cycling"
    ],
    correctOption: 1,
    explanation: "Bikepacking is long-distance cycling that includes carrying camping gear, often on off-road routes or bike trails."
  },
  {
    question: "What is the primary material used in high-performance bicycle frames?",
    options: [
      "Steel",
      "Aluminum",
      "Titanium",
      "Carbon fiber"
    ],
    correctOption: 3,
    explanation: "Carbon fiber is commonly used for high-performance bicycle frames due to its light weight and strength."
  },
  {
    question: "Which of the following is a key benefit of cycling for fitness?",
    options: [
      "Improved cardiovascular health",
      "Increased muscle mass",
      "Improved bone density",
      "All of the above"
    ],
    correctOption: 0,
    explanation: "Cycling is beneficial for cardiovascular health, as it strengthens the heart and improves blood circulation."
  },
  {
    question: "What is a common technique to reduce wind resistance when cycling?",
    options: [
      "Riding in a crouched position",
      "Increasing tire pressure",
      "Pedaling faster",
      "Riding with a heavier bike"
    ],
    correctOption: 0,
    explanation: "Riding in a crouched position reduces wind resistance by making the cyclist's body more aerodynamic."
  }
]
};

const Quizzes = () => {
  const [sportCategory, setSportCategory] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timeUp, setTimeUp] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    if (sportCategory) {
      setQuizStarted(true);
    } else {
      alert("Please select a sport category.");
    }
  };

  const handleSportChange = (event) => {
    setSportCategory(event.target.value);
  };

  const currentQuiz = allQuizzes[sportCategory] ? allQuizzes[sportCategory][currentQuestion] : null;

  const handleOptionClick = (index) => {
    if (!isSubmitted && !timeUp) setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuiz.correctOption) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setTimeUp(false);
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(15);
  };

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted && !timeUp) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted && !timeUp) {
      setTimeUp(true);
      setIsSubmitted(true);
    }
  }, [timeLeft, isSubmitted, timeUp]);

  const handleRestart = () => {
    setSportCategory("");
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
    setTimeUp(false);
    setIsSubmitted(false);
    setQuizStarted(false);
  };



  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <h1>Choose Your Sport</h1>
        <select className="sport-select" value={sportCategory} onChange={handleSportChange}>
          <option value="">Select Sport</option>
          <option value="athletics">Athletics</option>
          <option value="cricket">Cricket</option>
          <option value="boxing">Boxing</option>
          <option value="weightlifting">Weightlifting</option>
          <option value="wrestling">Wrestling</option>
          <option value="soccer">Football/Soccer</option>
          <option value="cycling">Cycling</option>
        </select>
        <button className="start-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    );
  }

  if (currentQuestion >= allQuizzes[sportCategory].length) {
    return (
      <div className="quiz-container">
        <h1>Final Results</h1>
        <p>Your score: {score} / {allQuizzes[sportCategory].length}</p>
        <button className="restart-button" onClick={handleRestart}>
          Restart Quiz
        </button>
        
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>{sportCategory.charAt(0).toUpperCase() + sportCategory.slice(1)} Anti-Doping Quiz</h1>
      <h2>{currentQuiz.question}</h2>
      <div className="timer">Time Left: {timeLeft}s</div>
      <div className="options">
        {currentQuiz.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              isSubmitted
                ? index === currentQuiz.correctOption
                  ? "correct"
                  : index === selectedOption
                  ? "incorrect"
                  : ""
                : index === selectedOption
                ? "selected"
                : ""
            }`}
            onClick={() => handleOptionClick(index)}
            disabled={isSubmitted || timeUp}
          >
            {option}
          </button>
        ))}
      </div>
      {isSubmitted && (
        <div className="result">
          {timeUp ? (
            <>
              <p className="error-message">⏰ Time's up! The correct answer was:</p>
              <p className="correct-answer">
                {currentQuiz.options[currentQuiz.correctOption]}
              </p>
            </>
          ) : selectedOption === currentQuiz.correctOption ? (
            <p className="success-message">🎉 Congratulations! Your answer is correct.</p>
          ) : (
            <>
              <p className="error-message">Oh no! Your answer is incorrect.</p>
              <p className="explanation">Explanation: {currentQuiz.explanation}</p>
            </>
          )}
        </div>
      )}
      {isSubmitted ? (
        <button className="next-button" onClick={handleNext}>
          Next Question
        </button>
      ) : (
        <button className="submit-button" onClick={handleSubmit}>
          Submit Answer
        </button>
      )}
      <p className="score">Score: {score} / {allQuizzes[sportCategory].length}</p>
    </div>
  );
};

export default Quizzes;

