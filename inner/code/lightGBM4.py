import lightgbm 
from lightgbm import *
from sklearn.metrics import explained_variance_score, mean_absolute_error, mean_squared_error,median_absolute_error,r2_score
import pandas as pd
import numpy as np
import sys
import json
import joblib

class Result:
    explained_variance_score = 0
    mean_absolute_error = 0
    mean_squared_error = 0
    median_absolute_error =0
    r2_score=0
params = {}
params['model'] = 'F:/pyadd//work/cwru.model'
params['test'] = 'F:/pyadd/test/test_fea2.csv'
params['opath']='F:/pyadd/test/result.csv'
#params['model'] = 'D:/users/desktop/dazuoye/model/lightgbm_model.model'
#params['test'] = 'D:/users/desktop/dazuoye/text2/test_fea2.csv'
#params['opath']='D:/users/desktop/dazuoye/text2/out2.csv'
argvs = sys.argv
try:
    for i in range(len(argvs)):
        if i < 1:
            continue
        if argvs[i].split('=')[1] == 'None':
            params[argvs[i].split('=')[0]] = None
        else:
            Type = type(params[argvs[i].split('=')[0]])
            params[argvs[i].split('=')[0]] = Type(argvs[i].split('=')[1])

    model = joblib.load(params['model'])

    test_csv = pd.read_csv(params['test'])

    test_feature = test_csv.drop(['label'], axis=1)

    #y_pred = model.predict_proba(test_feature)
    
    y_pred = model.predict(test_feature,num_iteration=model.best_iteration)
    
    #print(y_pred)
    #predict=np.argmax(y_pred,axis=1)
    
    #print(predict)
    
    predict_df = pd.DataFrame(y_pred,columns = ['0','1','2','3'])
    predict_df['label']=predict_df.idxmax(axis=1)
    predict_df['filename']=test_csv['label']
    df1 = predict_df['label']
    df2 = predict_df['filename']
    df0 = pd.concat([df1,df2],axis=1)

    df3=pd.DataFrame(columns=['name'])
    for name in df2:
        if name not in df3.values:
            df4=pd.DataFrame([name],columns=['name'])
            df3=pd.concat([df3,df4],axis=0,ignore_index=True)
    df5=pd.DataFrame(columns=['label','filename'])
    for name in df3.name:
        aa =np.array([[0,0,0,0]])
        df4=pd.DataFrame(aa)
        for i in df0.label[df0.filename==name]:
            df4.iloc[0,int(i)]=df4.iloc[0,int(i)]+1
        label=df4.idxmax(axis=1)
        df6=pd.DataFrame([[int(label),name]],columns=['label','filename'])
        df5=pd.concat([df5,df6],axis=0,ignore_index=True)
                
                


    
    #df3 = predict_df['0']
    #df4 = predict_df['1']
    #df5 = predict_df['2']
    #df6 = predict_df['3']
    #result1 = pd.concat([result,df3,df4,df5,df6],axis=1)
    #predict_df.columns = ['label']
    df5.to_csv(params['opath'],index=False)
except Exception as e:
    print(e)
