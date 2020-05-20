import lightgbm as lgb  
import pandas as pd  
import numpy as np  
import pickle
import os
from sklearn import metrics
from sklearn.metrics import precision_score, recall_score, accuracy_score, f1_score, roc_auc_score  
from sklearn.model_selection import train_test_split  
import joblib

params = {}
#params['data_path'] = 'F:/pyadd/test/test2'

#def predict (filename,files_path):
    #print("Loading Data ... ")  


    # 导入数据  
train = np.array(pd.read_csv('F:/pyadd/test/train_fea.csv'))
train_y = train[:, -1]
train_x = train[:, :-1]
    #test=np.array(pd.read_csv(files_path+'/'+filename))
    #test_x=test[:,:]


    # 用sklearn.cross_validation进行训练数据集划分，这里训练集和交叉验证集比例为7：3，可以自己根据需要设置  
X, val_X, y, val_y = train_test_split(  
   train_x,  
   train_y,  
   test_size=0.20,  
   random_state=2019,  
        #stratify=train_y # 这里保证分割后y的比例分布与原数据一致  
)  

X_train = X  
y_train = y  
X_test = val_X  
y_test = val_y  


    # create dataset for lightgbm  
lgb_train = lgb.Dataset(X_train, y_train.astype('int'))  
lgb_eval = lgb.Dataset(X_test, y_test.astype('int'), reference=lgb_train)  
    # specify your configurations as a dict  
params = {  
   'boosting_type': 'gbdt',  
   'objective': 'multiclass',  
   'num_class': 4,  
   'metric': 'multi_error',  
   'num_leaves': 31,  
   'min_data_in_leaf': 20,  
   'learning_rate': 0.1,  
   'feature_fraction': 1.0,  
   'bagging_fraction': 1.0,  
   'bagging_freq': 5,  
   'lambda_l1': 0,  
   'lambda_l2': 0.5,  
   'min_gain_to_split': 0.2,  
   'verbose': 1, 
   'is_unbalance': True  
}  

    # train  
    #print('Start training...')  
gbm = lgb.train(params,  
                lgb_train,  
                num_boost_round=800,  
                valid_sets=lgb_eval,  
                early_stopping_rounds=20) 
    
joblib.dump(gbm,'F:/model/lightgbm_model.model')