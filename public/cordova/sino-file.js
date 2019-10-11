/**
 * sino-file.js
 * 由于File API和XMLHttpRequest已经支持下载文件，同时Cordova也推荐使用该方式，所以重新使用新方法编写
 * 不好意思 重新编写失败了 直接使用File API 上传文件时很容易页面就崩溃了 还是老路子靠谱
 * @version 1.1
 * @author LHY
 */
if (sino_cordova_checkApp() === 'Browser') {
  setTimeout(window.ready, 1);
} else {
  document.addEventListener('deviceready', window.ready);
}

function sino_cordova_checkApp() {
  //安卓APP UA中增加了自定义的 字符串 用此来判断用户使用的是安卓APP访问
  if (navigator.userAgent.indexOf('SINO_ANDROID_APP') !== -1) {
    return 'Android';
  } else if (localStorage.sino_app_version === 'IPAD' || navigator.userAgent.indexOf('SINO_IOS_APP') !== -1) {
    //IOS由于修改UA无效 所以 在localStorage中增加了数据 用于判断
    return 'IOS';
  } else {
    return 'Browser';
  }
}

// function ready() {
//   var sino_file = window.sino_file = window.sino_file || {};
//   /**
//    * 该方法第一个参数可以取值 window.TEMPORARY 或 window.PERSISTENT，据此参数可以获取到不同的root目录
//    * 在Cordova中获取到的对象中具有nativeURL属性 在不同的系统中该路径有所区别
//    * 安卓设备中
//    * window.TEMPORARY 对应 cordova.file.cacheDirectory 目录
//    * window.PERSISTENT 对应 cordova.file.dataDirectory + "files/" 目录
//    * iOS设备中
//    * window.TEMPORARY 对应 cordova.file.tempDirectory 目录
//    * window.PERSISTENT 对应 cordova.file.documentsDirectory 目录
//    */
//   window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
//   /**
//    * 在Cordova中可以直接通过路径获取到相应数据
//    */
//   window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;

// //用于读取数据的类型
//   sino_file.readType = {
//     BLOB: 0, // 二进制字符串
//     TEXT: 1, // 文本字符串
//     DATA_URL: 2, // BASE64编码
//     ARRAY: 3, // ArrayBuffer 对象
//     FILE_URI: 4, // filesystem地址
//     CORDOVA_URL: 5, // cordova 的url 可用于src等属性
//     FILE_ENTRY: 6 // 直接获取fileEntry对象
//   };

//   /**
//    *
//    * 读取文件
//    * @param path
//    * @param type
//    * @param success
//    * @param error
//    */
//   sino_file.read = function (path, type, success, error) {
//     error = error_handle(error);
//     this.isExist(path, function (result) {
//       if (result.isExist === 1) {
//         readFile(result.file, type, success, error);
//       } else {
//         error({code: FileError.NOT_FOUND_ERR})
//       }
//     }, error);
//   };

//   /**
//    * 写入文件
//    * @param path
//    * @param data
//    * @param success
//    * @param error
//    */
//   sino_file.write = function (path, data, success, error) {
//     error = error_handle(error);
//     this.mkfile(path, function (result) {
//       result.file.createWriter(function (fileWriter) {
//         fileWriter.onwriteend = function () {
//           if (success) success({flag: 1, file: result.file});
//         };
//         fileWriter.onerror = error;
//         fileWriter.write(data);
//       })
//     }, error);
//   };

//   /**
//    * 写入文件
//    * @param path
//    * @param data
//    * @param position
//    * @param success
//    * @param error
//    */
//   sino_file.writeAppend = function (path, data, position, success, error) {
//     error = error_handle(error);
//     this.mkfile(path, function (result) {
//       result.file.createWriter(function (fileWriter) {
//         fileWriter.seek(position || fileWriter.length);
//         fileWriter.onwriteend = function () {
//           if (success) success({flag: 1, file: result.file});
//         };
//         fileWriter.onerror = error;
//         fileWriter.write(data);
//       })
//     }, error);
//   };

//   /**
//    * 删除文件
//    * @param path
//    * @param success
//    * @param error
//    */
//   sino_file.delete = function (path, success, error) {
//     error = error_handle(error);
//     this.isExist(path, function (result) {
//       if (result.isExist === 1) {
//         if (result.file.isFile) {
//           result.file.remove(success, error);
//         } else {
//           result.file.removeRecursively(success, error);
//         }
//       } else {
//         success && success();
//       }
//     }, error);
//   };

//   /**
//    * 移动文件
//    * @param src 原文件URL
//    * @param dir 目标URL 以cdvfile://localhost/temporary/ 开头
//    * @param newName copy后文件名称 如果无需改名 为null
//    * @param callback
//    */
//   sino_file.move = function(src,dir,newName,callback){
//     console.log('准备移动文件,src:'+src+'\ndir:'+dir+'\nnewName:'+newName);
//     var _dir = dir.replace(sino_file.tempDirURL,'');
//     console.log(_dir);
//     sino_file.mkdirs(_dir,function(dirEntry){
//       window.resolveLocalFileSystemURL(src,function(srcEntry){
//         srcEntry.moveTo(dirEntry,newName);
//         if(callback) callback();
//       });
//     });
//   };

//   /**
//    * 根据文件路径 判断文件是否存在
//    * @param path
//    * @param success 参数{
//    *      isExist:1 存在 0 不存在 -1 出现其他异常
//    *      entry:当文件存在时返回文件对象
//    * }
//    * @param error
//    */
//   sino_file.isExist = function (path, success, error) {
//     window.resolveLocalFileSystemURL(path, function (file) {
//       success({
//         isExist: 1,
//         file: file
//       });
//     }, function (e) {
//       if (e && e.code === window.FileError.NOT_FOUND_ERR) {
//         success({
//           isExist: 0
//         })
//       } else {
//         error_handle(error)(e);
//       }
//     });
//   };

//   sino_file.mkfile = function (path, success, error) {
//     error = error_handle(error);
//     var pathArr = path.split('/');
//     if (pathArr.length <= 1) error({code: 'SINO_MKFILE_PATH_ERROR', msg: '创建文件路径错误'});
//     var fileName = pathArr.pop();
//     var parentPath = pathArr.join('/');

//     this.mkdirs(parentPath, function (result) {
//       if (result.flag === 1 && result.file.isDirectory) {
//         result.file.getFile(fileName, {create: true}, function (file) {
//           success({flag: 1, file: file});
//         }, error)
//       }
//     }, error)
//   }

//   /**
//    * 根据路径创建目录
//    * @param path
//    * @param success
//    * @param error
//    */
//   sino_file.mkdirs = function (path, success, error) {
//     error = error_handle(error);

//     this.isExist(path, function (result) {
//       if (result.isExist === 1) {
//         success({flag: 1, file: result.file});
//       } else {
//         var pathArr = path.split('/');
//         // 如果路径长度是1 说明已经是最后一个路径了 如果该路径不存在说明
//         if (pathArr.length <= 1) {
//           error({code: 'SINO_MKDIR_ERROR', msg: '创建目录出现错误'})
//         } else {
//           var dirName = pathArr.pop();
//           sino_file.mkdirs(pathArr.join('/'), function (result) {
//             // 如果路径存在并且为目录
//             if (result.flag === 1 && result.file.isDirectory) {
//               result.file.getDirectory(dirName, {create: true}, function (file) {
//                 success({flag: 1, file: file});
//               }, error)
//             } else {
//               error({code: 'SINO_MKDIR_ERROR', msg: '创建目录出现错误'})
//             }
//           }, error)
//         }

//       }
//     })
//   };

//   /**
//    * 上传文件
//    * @param path 本地文件路径
//    * @param url 服务器文件路径
//    * @param success 成功回调
//    * @param error 失败回调
//    * @param options 参数
//    * @param progress 进度回调
//    */
//   sino_file.uploadFile = function (path, url, options, progress, success, error) {
//     var promise = new Promise(function (resolve, reject) {
//       var ft = new FileTransfer();
//       ft.onprogress = function (e) {
//         if (progress) {
//           // 计算百分比
//           var percentage = '0%';
//           if (e.lengthComputable) {
//             percentage = Math.floor((e.loaded / e.total) * 100) + '%';
//           } else {
//             percentage = (parseInt(percentage, 10) + 1) + '%';
//           }
//           progress(percentage, e);
//         }
//       };

//       options = options || {};


//       ft.upload(path, url, function (data) {
//         if (typeof(data.response) === 'string') {
//           var _response = data.response;
//           try {
//             data.response = JSON.parse(_response);
//           } catch (e) {
//             console.log('后台返回数据非JSON', e);
//           }
//         }
//         resolve(data);
//         if (success) success(data);
//       }, function (e) {
//         reject(e);
//         if (error) error(e);
//       }, options, true);
//     })
//     return promise;
//   };

//   /**
//    * 下载文件
//    * @param url 下载地址
//    * @param path 保存路径
//    * @param success 成功回调
//    * @param error 失败回调
//    * @param progress 进度
//    */
//   sino_file.download = function (url, path, success, error, progress) {
//     return new Promise(function (resolve, reject) {
//       var ft = new FileTransfer();
//       ft.onprogress = function (e) {
//         if (progress) {
//           // 计算百分比
//           var percentage = '0%';
//           if (e.lengthComputable) {
//             percentage = Math.floor((e.loaded / e.total) * 100) + '%';
//           } else {
//             percentage = (parseInt(percentage, 10) + 1) + '%';
//           }
//           progress(percentage, e);
//         }
//       };
//       ft.download(url, path, function (data) {
//         if (typeof(data.response) === 'string') {
//           var _response = data.response;
//           try {
//             data.response = JSON.parse(_response);
//           } catch (e) {
//             console.log('后台返回数据非JSON', e);
//           }
//         }
//         if (success) success(data);
//         resolve(data);
//       }, function (e) {
//         if (error) error(e);
//         reject(e);
//       }, true, {
//         'User-Agent': 'SINO_ANDROID_APP'
//       });
//     })

//   };

//   /**
//    *
//    * 读取文件夹下的所有文件列表
//    * @param path
//    * @param success
//    * @param error
//    */
//   sino_file.listFiles = function (path, success, error) {
//      //alert(path)
//     error = error_handle(error);
//     window.resolveLocalFileSystemURL(path, function (directory_entry) {
//       directory_entry.createReader().readEntries(  //如果 entry 已经是 DirectoryEntry 可以直接从这步开始
//         function (entry_array) {
//           // alert("遍历目录：" + JSON.stringify(entry_array));
//           success(entry_array)
//          // success(entry_array)
//          //  for (var index in entry_array) {
//          //    alert(entry_array[index].toURL());  //native file
//          //    alert(entry_array[index].toInternalURL());  //cdvfile
//          //  }
//         },
//         function (file_error) {
//           //alert("遍历错误：" + file_error);
//         }
//       );
//     }, error);
//   };

//   /**
//    * 读取文件
//    * @param path
//    * @param success
//    * @param error
//    */
//   function listDirFiles(path, success, error) {
//     var reader = new DirectoryReader(path);
//     //alert(JSON.stringify(reader))
//     reader.readEntries(function (results) {
//       alert(results.length);
//       success(results)
//     }, error);
//   }

//   /**
//    * 读取文件
//    * @param fileEntry
//    * @param type
//    * @param success
//    * @param error
//    */
//   function readFile(fileEntry, type, success, error) {
//     console.log('fileEntry:');
//     console.log(fileEntry);

//     if (type === sino_file.readType.CORDOVA_URL) {
//       success(fileEntry.toInternalURL());
//     } else if (type === sino_file.readType.FILE_URI) {
//       success(fileEntry.toURL());
//     } else if (type === sino_file.FILE_ENTRY) {
//       success(fileEntry);
//     } else if (fileEntry.isFile) { // 如果是文件 才可以获取文件内容
//       fileEntry.file(function (file) {
//         console.log('开始读取文件');
//         console.log(file);
//         var reader = new FileReader();
//         reader.onloadend = function (e) {
//           console.log(e);
//           success(e.target.result);
//         };

//         switch (type) {
//           case sino_file.readType.BLOB:
//             reader.readAsBinaryString(file);
//             break;
//           case sino_file.readType.TEXT:
//             reader.readAsText(file);
//             break;
//           case sino_file.readType.DATA_URL:
//             reader.readAsDataURL(file);
//             break;
//           case sino_file.readType.ARRAY:
//             reader.readAsArrayBuffer(file);
//             break;
//           default:
//             reader.readAsText(file);
//             break;
//         }
//       }, error);
//     } else {
//       error_handle(error)({code: 'SINO_READ_TYPE_ERROR', msg: '读取文件类型错误'});
//     }
//   }

//   /**
//    * 通用的错误绑定函数
//    * @param errorCallback
//    * @returns {Function}
//    */
//   function error_handle(errorCallback) {
//     if (errorCallback && !errorCallback._isInit) {
//       var _errorCallback = errorCallback;
//       errorCallback = function (e) {
//         error_msg(e);
//         _errorCallback(e);
//       };
//       _errorCallback._isInit = true;
//     }

//     return errorCallback || error_msg;
//   }

//   /**
//    * 处理错误信息
//    * @param e
//    */
//   function error_msg(e) {
//     var msg = '';

//     switch (e.code) {
//       case FileError.NOT_FOUND_ERR: // 1
//         msg = 'NOT_FOUND_ERR';
//         break;
//       case FileError.SECURITY_ERR: // 2
//         msg = 'SECURITY_ERR';
//         break;
//       case FileError.ABORT_ERR: // 3
//         msg = 'ABORT_ERR';
//         break;
//       case FileError.NOT_READABLE_ERR: // 4
//         msg = 'NOT_READABLE_ERR';
//         break;
//       case FileError.ENCODING_ERR: // 5
//         msg = 'ENCODING_ERR';
//         break;
//       case FileError.NO_MODIFICATION_ALLOWED_ERR: // 6
//         msg = 'NO_MODIFICATION_ALLOWED_ERR';
//         break;
//       case FileError.INVALID_STATE_ERR: // 7
//         msg = 'INVALID_STATE_ERR';
//         break;
//       case FileError.SYNTAX_ERR: // 8
//         msg = 'SYNTAX_ERR';
//         break;
//       case FileError.INVALID_MODIFICATION_ERR: // 9
//         msg = 'INVALID_MODIFICATION_ERR';
//         break;
//       case FileError.QUOTA_EXCEEDED_ERR: // 10
//         msg = 'QUOTA_EXCEEDED_ERR';
//         break;
//       case FileError.TYPE_MISMATCH_ERR: // 11
//         msg = 'TYPE_MISMATCH_ERR';
//         break;
//       case FileError.PATH_EXISTS_ERR: // 12
//         msg = 'PATH_EXISTS_ERR';
//         break;
//       default:
//         msg = e.msg || 'Unknown Error';
//         break;
//     }
//     ;

//     console.log('Code: ' + e.code + ';Error: ' + msg);
//   }
// }



