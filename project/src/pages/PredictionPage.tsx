// import React, { useState } from 'react';
// import Container from '../components/Container';
// import Card from '../components/Card';
// import UploadForm from '../components/UploadForm';
// import PredictionResult from '../components/PredictionResult';
// import { AlertCircle, FileText, HeartPulse } from 'lucide-react';

// type HeartCondition = {
//   name: string;
//   description: string;
//   causes: string[];
//   symptoms: string[];
//   treatment: string[];
//   prevention: string[];
// };

// type PredictionResult = {
//   status: 'normal' | 'abnormal' | 'uncertain';
//   confidence: number;
//   condition?: string;
//   description?: string;
//   details?: HeartCondition;
// };

// const heartConditions: Record<string, HeartCondition> = {
//   'arrhythmia': {
//     name: 'Cardiac Arrhythmia',
//     description: 'An irregular heartbeat or abnormal heart rhythm where the heart beats too fast, too slow, or irregularly.',
//     causes: [
//       'Heart disease or damage',
//       'High blood pressure',
//       'Electrolyte imbalances',
//       'Smoking',
//       'Excessive alcohol or caffeine consumption',
//       'Drug use',
//       'Stress'
//     ],
//     symptoms: [
//       'Irregular heartbeat or palpitations',
//       'Shortness of breath',
//       'Chest pain',
//       'Lightheadedness or dizziness',
//       'Fainting or near-fainting',
//       'Fatigue'
//     ],
//     treatment: [
//       'Medications (antiarrhythmic drugs)',
//       'Cardioversion therapy',
//       'Catheter ablation',
//       'Pacemaker implantation',
//       'Lifestyle changes',
//       'Regular monitoring'
//     ],
//     prevention: [
//       'Maintain a healthy heart-healthy diet',
//       'Regular exercise',
//       'Quit smoking',
//       'Limit alcohol and caffeine intake',
//       'Manage stress',
//       'Regular check-ups',
//       'Control blood pressure'
//     ]
//   },
//   'myocardial-infarction': {
//     name: 'Myocardial Infarction (Heart Attack)',
//     description: 'A serious condition where blood flow to part of the heart muscle is blocked, causing tissue damage.',
//     causes: [
//       'Coronary artery disease',
//       'Blood clots',
//       'Atherosclerosis',
//       'High blood pressure',
//       'High cholesterol',
//       'Smoking',
//       'Diabetes'
//     ],
//     symptoms: [
//       'Chest pain or pressure',
//       'Pain in arms, neck, jaw, or back',
//       'Shortness of breath',
//       'Cold sweats',
//       'Nausea',
//       'Lightheadedness'
//     ],
//     treatment: [
//       'Emergency medical intervention',
//       'Medications (blood thinners, pain relievers)',
//       'Coronary angioplasty',
//       'Bypass surgery',
//       'Cardiac rehabilitation',
//       'Lifestyle modifications'
//     ],
//     prevention: [
//       'Regular exercise',
//       'Heart-healthy diet',
//       'Quit smoking',
//       'Control blood pressure and cholesterol',
//       'Manage diabetes',
//       'Maintain healthy weight',
//       'Regular check-ups'
//     ]
//   },
//   'afib': {
//     name: 'Atrial Fibrillation (AFib)',
//     description: 'A common type of irregular heartbeat where the upper chambers of the heart beat chaotically and irregularly.',
//     causes: [
//       'High blood pressure',
//       'Heart disease',
//       'Previous heart attack',
//       'Sleep apnea',
//       'Thyroid problems',
//       'Excessive alcohol use',
//       'Age (risk increases with age)'
//     ],
//     symptoms: [
//       'Irregular and rapid heartbeat',
//       'Heart palpitations',
//       'Weakness',
//       'Reduced ability to exercise',
//       'Fatigue',
//       'Lightheadedness',
//       'Shortness of breath',
//       'Chest pain'
//     ],
//     treatment: [
//       'Blood-thinning medications',
//       'Heart rate control medications',
//       'Rhythm control medications',
//       'Cardioversion',
//       'Catheter ablation',
//       'Lifestyle changes'
//     ],
//     prevention: [
//       'Control blood pressure',
//       'Heart-healthy diet',
//       'Regular exercise',
//       'Maintain healthy weight',
//       'Limit alcohol consumption',
//       'Quit smoking',
//       'Manage stress'
//     ]
//   }
// };

// const PredictionPage: React.FC = () => {
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [result, setResult] = useState<PredictionResult | null>(null);

//   // Simulate analyzing the ECG image
//   const analyzeECG = async (file: File) => {
//     setIsAnalyzing(true);
    
//     // Simulate API call delay
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     // Simulate a random result for demonstration
//     const randomResult = Math.random();
//     let simulatedResult: PredictionResult;
    
//     if (randomResult < 0.4) {
//       simulatedResult = {
//         status: 'normal',
//         confidence: 85 + Math.floor(Math.random() * 10),
//         description: 'The ECG appears to show a normal sinus rhythm with no significant abnormalities detected. Regular P waves, QRS complexes, and T waves are present with normal intervals.'
//       };
//     } else if (randomResult < 0.6) {
//       simulatedResult = {
//         status: 'abnormal',
//         confidence: 78 + Math.floor(Math.random() * 15),
//         condition: 'Atrial Fibrillation',
//         description: 'The ECG shows irregular rhythm and absent P waves, suggesting atrial fibrillation.',
//         details: heartConditions['afib']
//       };
//     } else if (randomResult < 0.8) {
//       simulatedResult = {
//         status: 'abnormal',
//         confidence: 82 + Math.floor(Math.random() * 12),
//         condition: 'Myocardial Infarction',
//         description: 'The ECG shows ST-segment elevation and Q waves, indicating possible myocardial infarction.',
//         details: heartConditions['myocardial-infarction']
//       };
//     } else if (randomResult < 0.9) {
//       simulatedResult = {
//         status: 'abnormal',
//         confidence: 75 + Math.floor(Math.random() * 15),
//         condition: 'Cardiac Arrhythmia',
//         description: 'The ECG shows irregular intervals and abnormal wave patterns, suggesting an arrhythmia.',
//         details: heartConditions['arrhythmia']
//       };
//     } else {
//       simulatedResult = {
//         status: 'uncertain',
//         confidence: 50 + Math.floor(Math.random() * 20),
//         description: 'The image quality or ECG patterns are difficult to interpret with confidence. Consider uploading a clearer image or consulting with a healthcare provider for a professional ECG reading.'
//       };
//     }
    
//     setResult(simulatedResult);
//     setIsAnalyzing(false);
//   };

//   return (
//     <div className="pt-24 pb-16 min-h-screen">
//       <Container maxWidth="lg">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
//             ECG Analysis Tool
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Upload an image of an electrocardiogram (ECG/EKG) to detect potential heart abnormalities using our AI-powered analysis.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <Card>
//               <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
//                 <HeartPulse className="mr-2 text-primary-700" size={24} />
//                 Upload Your ECG Image
//               </h2>
              
//               <div className="mb-6">
//                 <div className="p-3 bg-primary-50 border border-primary-100 rounded-md flex items-start">
//                   <FileText className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
//                   <div className="text-sm text-primary-800">
//                     <p className="font-medium mb-1">For best results:</p>
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Upload a clear, well-lit image of the ECG</li>
//                       <li>Ensure the entire ECG strip is visible</li>
//                       <li>Supported formats: JPG, JPEG, PNG</li>
//                       <li>Maximum file size: 5MB</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
              
//               <UploadForm 
//                 onSubmit={analyzeECG}
//                 isLoading={isAnalyzing}
//               />
//             </Card>
//           </div>
          
//           <div>
//             <Card>
//               <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
//                 <AlertCircle className="mr-2 text-primary-700" size={24} />
//                 Important Information
//               </h2>
              
//               <div className="space-y-4 text-gray-600">
//                 <p>
//                   This tool is designed for educational purposes and should not be used as a replacement for professional medical advice, diagnosis, or treatment.
//                 </p>
//                 <p>
//                   The AI predictions are based on pattern recognition in ECG images and may not account for your complete medical history or specific conditions.
//                 </p>
//                 <p>
//                   Always consult with a qualified healthcare provider for proper interpretation of ECG results and medical guidance.
//                 </p>
//                 <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md text-yellow-800 text-sm mt-6">
//                   <p className="font-semibold">In case of emergency:</p>
//                   <p className="mt-1">
//                     If you are experiencing chest pain, shortness of breath, or any other concerning symptoms, please call emergency services immediately.
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
        
//         {/* Results Section */}
//         {result && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-primary-800 mb-4">Analysis Results</h2>
//             <PredictionResult 
//               status={result.status}
//               confidence={result.confidence}
//               condition={result.condition}
//               description={result.description}
//               details={result.details}
//             />
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default PredictionPage;


//------------------------------------------


import React, { useState } from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import UploadForm from '../components/UploadForm';
import PredictionResult from '../components/PredictionResult';
import { AlertCircle, FileText, HeartPulse } from 'lucide-react';

type HeartCondition = {
  name: string;
  description: string;
  causes: string[];
  symptoms: string[];
  treatment: string[];
  prevention: string[];
};

type PredictionResult = {
  status: 'normal' | 'abnormal' | 'uncertain';
  confidence: number;
  condition?: string;
  description?: string;
  details?: HeartCondition;
};

const heartConditions: Record<string, HeartCondition> = {
  'arrhythmia': {
    name: 'Cardiac Arrhythmia',
    description: 'An irregular heartbeat or abnormal heart rhythm where the heart beats too fast, too slow, or irregularly.',
    causes: [
      'Heart disease or damage',
      'High blood pressure',
      'Electrolyte imbalances',
      'Smoking',
      'Excessive alcohol or caffeine consumption',
      'Drug use',
      'Stress'
    ],
    symptoms: [
      'Irregular heartbeat or palpitations',
      'Shortness of breath',
      'Chest pain',
      'Lightheadedness or dizziness',
      'Fainting or near-fainting',
      'Fatigue'
    ],
    treatment: [
      'Medications (antiarrhythmic drugs)',
      'Cardioversion therapy',
      'Catheter ablation',
      'Pacemaker implantation',
      'Lifestyle changes',
      'Regular monitoring'
    ],
    prevention: [
      'Maintain a healthy heart-healthy diet',
      'Regular exercise',
      'Quit smoking',
      'Limit alcohol and caffeine intake',
      'Manage stress',
      'Regular check-ups',
      'Control blood pressure'
    ]
  },
  'myocardial-infarction': {
    name: 'Myocardial Infarction (Heart Attack)',
    description: 'A serious condition where blood flow to part of the heart muscle is blocked, causing tissue damage.',
    causes: [
      'Coronary artery disease',
      'Blood clots',
      'Atherosclerosis',
      'High blood pressure',
      'High cholesterol',
      'Smoking',
      'Diabetes'
    ],
    symptoms: [
      'Chest pain or pressure',
      'Pain in arms, neck, jaw, or back',
      'Shortness of breath',
      'Cold sweats',
      'Nausea',
      'Lightheadedness'
    ],
    treatment: [
      'Emergency medical intervention',
      'Medications (blood thinners, pain relievers)',
      'Coronary angioplasty',
      'Bypass surgery',
      'Cardiac rehabilitation',
      'Lifestyle modifications'
    ],
    prevention: [
      'Regular exercise',
      'Heart-healthy diet',
      'Quit smoking',
      'Control blood pressure and cholesterol',
      'Manage diabetes',
      'Maintain healthy weight',
      'Regular check-ups'
    ]
  },
  'afib': {
    name: 'Atrial Fibrillation (AFib)',
    description: 'A common type of irregular heartbeat where the upper chambers of the heart beat chaotically and irregularly.',
    causes: [
      'High blood pressure',
      'Heart disease',
      'Previous heart attack',
      'Sleep apnea',
      'Thyroid problems',
      'Excessive alcohol use',
      'Age (risk increases with age)'
    ],
    symptoms: [
      'Irregular and rapid heartbeat',
      'Heart palpitations',
      'Weakness',
      'Reduced ability to exercise',
      'Fatigue',
      'Lightheadedness',
      'Shortness of breath',
      'Chest pain'
    ],
    treatment: [
      'Blood-thinning medications',
      'Heart rate control medications',
      'Rhythm control medications',
      'Cardioversion',
      'Catheter ablation',
      'Lifestyle changes'
    ],
    prevention: [
      'Control blood pressure',
      'Heart-healthy diet',
      'Regular exercise',
      'Maintain healthy weight',
      'Limit alcohol consumption',
      'Quit smoking',
      'Manage stress'
    ]
  }
};

const PredictionPage: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [email, setEmail] = useState('');

  // Simulate analyzing the ECG image
  const analyzeECG = async (file: File, userEmail: string) => {
    setIsAnalyzing(true);
    setEmail(userEmail);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate a random result for demonstration
    const randomResult = Math.random();
    let simulatedResult: PredictionResult;
    
    if (randomResult < 0.4) {
      simulatedResult = {
        status: 'normal',
        confidence: 85 + Math.floor(Math.random() * 10),
        description: 'The ECG appears to show a normal sinus rhythm with no significant abnormalities detected. Regular P waves, QRS complexes, and T waves are present with normal intervals.'
      };
    } else if (randomResult < 0.6) {
      simulatedResult = {
        status: 'abnormal',
        confidence: 78 + Math.floor(Math.random() * 15),
        condition: 'Atrial Fibrillation',
        description: 'The ECG shows irregular rhythm and absent P waves, suggesting atrial fibrillation.',
        details: heartConditions['afib']
      };
    } else if (randomResult < 0.8) {
      simulatedResult = {
        status: 'abnormal',
        confidence: 82 + Math.floor(Math.random() * 12),
        condition: 'Myocardial Infarction',
        description: 'The ECG shows ST-segment elevation and Q waves, indicating possible myocardial infarction.',
        details: heartConditions['myocardial-infarction']
      };
    } else if (randomResult < 0.9) {
      simulatedResult = {
        status: 'abnormal',
        confidence: 75 + Math.floor(Math.random() * 15),
        condition: 'Cardiac Arrhythmia',
        description: 'The ECG shows irregular intervals and abnormal wave patterns, suggesting an arrhythmia.',
        details: heartConditions['arrhythmia']
      };
    } else {
      simulatedResult = {
        status: 'uncertain',
        confidence: 50 + Math.floor(Math.random() * 20),
        description: 'The image quality or ECG patterns are difficult to interpret with confidence. Consider uploading a clearer image or consulting with a healthcare provider for a professional ECG reading.'
      };
    }
    
    // Simulate sending email report
    if (userEmail) {
      console.log(`Sending report to ${userEmail}`);
      // In a real app, you would call your backend API here
      // await sendEmailReport(userEmail, simulatedResult);
    }
    
    setResult(simulatedResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            ECG Analysis Tool
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Upload an image of an electrocardiogram (ECG/EKG) to detect potential heart abnormalities using our AI-powered analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
                <HeartPulse className="mr-2 text-primary-700" size={24} />
                Upload Your ECG Image
              </h2>
              
              <div className="mb-6">
                <div className="p-3 bg-primary-50 border border-primary-100 rounded-md flex items-start">
                  <FileText className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div className="text-sm text-primary-800">
                    <p className="font-medium mb-1">For best results:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Upload a clear, well-lit image of the ECG</li>
                      <li>Ensure the entire ECG strip is visible</li>
                      <li>Supported formats: JPG, JPEG, PNG</li>
                      <li>Maximum file size: 5MB</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <UploadForm 
                onSubmit={analyzeECG}
                isLoading={isAnalyzing}
              />
            </Card>
          </div>
          
          <div>
            <Card>
              <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
                <AlertCircle className="mr-2 text-primary-700" size={24} />
                Important Information
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  This tool is designed for educational purposes and should not be used as a replacement for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  The AI predictions are based on pattern recognition in ECG images and may not account for your complete medical history or specific conditions.
                </p>
                <p>
                  Always consult with a qualified healthcare provider for proper interpretation of ECG results and medical guidance.
                </p>
                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md text-yellow-800 text-sm mt-6">
                  <p className="font-semibold">In case of emergency:</p>
                  <p className="mt-1">
                    If you are experiencing chest pain, shortness of breath, or any other concerning symptoms, please call emergency services immediately.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Results Section */}
        {result && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">Analysis Results</h2>
            <PredictionResult 
              status={result.status}
              confidence={result.confidence}
              condition={result.condition}
              description={result.description}
              details={result.details}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default PredictionPage;