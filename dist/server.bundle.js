/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/LoginController.js":
/*!************************************!*\
  !*** ./src/api/LoginController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_MailConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/MailConfig */ \"./src/config/MailConfig.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config */ \"./src/config/index.js\");\n/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/Utils */ \"./src/common/Utils.js\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/model/User */ \"./src/model/User.js\");\n\n\n\n\n\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async forget(ctx) {\n    const {\n      body\n    } = ctx.request;\n    console.log(body);\n\n    try {\n      // body.username -> database -> email\n      let result = await Object(_config_MailConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        code: '1234',\n        expire: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),\n        email: body.username,\n        user: 'Brian'\n      });\n      ctx.body = {\n        code: 200,\n        data: result,\n        msg: '邮件发送成功'\n      };\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  async login(ctx) {\n    // 接收用户的数据\n    // 返回token\n    const {\n      body\n    } = ctx.request;\n    let sid = body.sid;\n    let code = body.code; // 验证图片验证码的时效性、正确性\n\n    let result = await Object(_common_Utils__WEBPACK_IMPORTED_MODULE_5__[\"checkCode\"])(sid, code);\n\n    if (result) {\n      // 验证用户账号密码是否正确\n      let checkUserPasswd = false;\n      let user = await _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n        username: body.username\n      });\n\n      if (await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(body.password, user.password)) {\n        checkUserPasswd = true;\n      } // mongoDB查库\n\n\n      if (checkUserPasswd) {\n        // 验证通过，返回Token数据\n        console.log('Hello login');\n        let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({\n          _id: 'brian'\n        }, _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET, {\n          expiresIn: '1d'\n        });\n        ctx.body = {\n          code: 200,\n          token: token\n        };\n      } else {\n        // 用户名 密码验证失败，返回提示\n        ctx.body = {\n          code: 404,\n          msg: '用户名或者密码错误'\n        };\n      }\n    } else {\n      // 图片验证码校验失败\n      ctx.body = {\n        code: 401,\n        msg: '图片验证码不正确,请检查！'\n      };\n    }\n  }\n\n  async reg(ctx) {\n    // 接收客户端的数据\n    const {\n      body\n    } = ctx.request; // 校验验证码的内容（时效性、有效性）\n\n    let sid = body.sid;\n    let code = body.code;\n    let msg = {}; // 验证图片验证码的时效性、正确性\n\n    let result = await Object(_common_Utils__WEBPACK_IMPORTED_MODULE_5__[\"checkCode\"])(sid, code);\n    let check = true;\n\n    if (result) {\n      // 查库，看username是否被注册\n      let user1 = await _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n        username: body.username\n      });\n\n      if (user1 !== null && typeof user1.username !== 'undefined') {\n        msg.username = ['此邮箱已经注册，可以通过邮箱找回密码'];\n        check = false;\n      }\n\n      let user2 = await _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n        name: body.name\n      }); // 查库，看name是否被注册\n\n      if (user2 !== null && typeof user2.name !== 'undefined') {\n        msg.name = ['此昵称已经被注册，请修改'];\n        check = false;\n      } // 写入数据到数据库\n\n\n      if (check) {\n        body.password = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(body.password, 5);\n        let user = new _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n          username: body.username,\n          name: body.name,\n          password: body.password,\n          created: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD HH:mm:ss')\n        });\n        let result = await user.save();\n        ctx.body = {\n          code: 200,\n          data: result,\n          msg: '注册成功'\n        };\n        return;\n      }\n    } else {\n      // veevalidate 显示的错误\n      msg.code = ['验证码已经失效，请重新获取！'];\n    }\n\n    ctx.body = {\n      code: 500,\n      msg: msg\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0xvZ2luQ29udHJvbGxlci5qcz85NTA3Il0sIm5hbWVzIjpbIkxvZ2luQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiZm9yZ2V0IiwiY3R4IiwiYm9keSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwic2VuZCIsImNvZGUiLCJleHBpcmUiLCJtb21lbnQiLCJhZGQiLCJmb3JtYXQiLCJlbWFpbCIsInVzZXJuYW1lIiwidXNlciIsImRhdGEiLCJtc2ciLCJlIiwibG9naW4iLCJzaWQiLCJjaGVja0NvZGUiLCJjaGVja1VzZXJQYXNzd2QiLCJVc2VyIiwiZmluZE9uZSIsImJjcnlwdCIsImNvbXBhcmUiLCJwYXNzd29yZCIsInRva2VuIiwianNvbndlYnRva2VuIiwic2lnbiIsIl9pZCIsImNvbmZpZyIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJyZWciLCJjaGVjayIsInVzZXIxIiwidXNlcjIiLCJuYW1lIiwiaGFzaCIsImNyZWF0ZWQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBTixDQUFzQjtBQUNwQkMsYUFBVyxHQUFHLENBQUc7O0FBQ0wsUUFBTkMsTUFBTSxDQUFDQyxHQUFELEVBQU07QUFDaEIsVUFBTTtBQUFFQztBQUFGLFFBQVdELEdBQUcsQ0FBQ0UsT0FBckI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7O0FBQ0EsUUFBSTtBQUNGO0FBQ0EsVUFBSUksTUFBTSxHQUFHLE1BQU1DLGtFQUFJLENBQUM7QUFDdEJDLFlBQUksRUFBRSxNQURnQjtBQUV0QkMsY0FBTSxFQUFFQyw2Q0FBTSxHQUNYQyxHQURLLENBQ0QsRUFEQyxFQUNHLFNBREgsRUFFTEMsTUFGSyxDQUVFLHFCQUZGLENBRmM7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O0FBRkksS0FBWDtBQUlEOztBQW5IbUI7O0FBc0hQLG1FQUFJbkIsZUFBSixFQUFmIiwiZmlsZSI6Ii4vc3JjL2FwaS9Mb2dpbkNvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VuZCBmcm9tICdAL2NvbmZpZy9NYWlsQ29uZmlnJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBqc29ud2VidG9rZW4gZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAL2NvbmZpZydcbmltcG9ydCB7IGNoZWNrQ29kZSB9IGZyb20gJ0AvY29tbW9uL1V0aWxzJ1xuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbC9Vc2VyJ1xuXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBhc3luYyBmb3JnZXQoY3R4KSB7XG4gICAgY29uc3QgeyBib2R5IH0gPSBjdHgucmVxdWVzdFxuICAgIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgdHJ5IHtcbiAgICAgIC8vIGJvZHkudXNlcm5hbWUgLT4gZGF0YWJhc2UgLT4gZW1haWxcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzZW5kKHtcbiAgICAgICAgY29kZTogJzEyMzQnLFxuICAgICAgICBleHBpcmU6IG1vbWVudCgpXG4gICAgICAgICAgLmFkZCgzMCwgJ21pbnV0ZXMnKVxuICAgICAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSxcbiAgICAgICAgZW1haWw6IGJvZHkudXNlcm5hbWUsXG4gICAgICAgIHVzZXI6ICdCcmlhbicsXG4gICAgICB9KVxuICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBtc2c6ICfpgq7ku7blj5HpgIHmiJDlip8nLFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9naW4oY3R4KSB7XG4gICAgLy8g5o6l5pS255So5oi355qE5pWw5o2uXG4gICAgLy8g6L+U5ZuedG9rZW5cbiAgICBjb25zdCB7IGJvZHkgfSA9IGN0eC5yZXF1ZXN0XG4gICAgbGV0IHNpZCA9IGJvZHkuc2lkXG4gICAgbGV0IGNvZGUgPSBib2R5LmNvZGVcbiAgICAvLyDpqozor4Hlm77niYfpqozor4HnoIHnmoTml7bmlYjmgKfjgIHmraPnoa7mgKdcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hlY2tDb2RlKHNpZCwgY29kZSlcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAvLyDpqozor4HnlKjmiLfotKblj7flr4bnoIHmmK/lkKbmraPnoa5cbiAgICAgIGxldCBjaGVja1VzZXJQYXNzd2QgPSBmYWxzZVxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZTogYm9keS51c2VybmFtZSB9KVxuICAgICAgaWYgKGF3YWl0IGJjcnlwdC5jb21wYXJlKGJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgICAgIGNoZWNrVXNlclBhc3N3ZCA9IHRydWVcbiAgICAgIH1cbiAgICAgIC8vIG1vbmdvRELmn6XlupNcbiAgICAgIGlmIChjaGVja1VzZXJQYXNzd2QpIHtcbiAgICAgICAgLy8g6aqM6K+B6YCa6L+H77yM6L+U5ZueVG9rZW7mlbDmja5cbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvIGxvZ2luJylcbiAgICAgICAgbGV0IHRva2VuID0ganNvbndlYnRva2VuLnNpZ24oeyBfaWQ6ICdicmlhbicgfSwgY29uZmlnLkpXVF9TRUNSRVQsIHtcbiAgICAgICAgICBleHBpcmVzSW46ICcxZCdcbiAgICAgICAgfSlcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgIHRva2VuOiB0b2tlblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDnlKjmiLflkI0g5a+G56CB6aqM6K+B5aSx6LSl77yM6L+U5Zue5o+Q56S6XG4gICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgIGNvZGU6IDQwNCxcbiAgICAgICAgICBtc2c6ICfnlKjmiLflkI3miJbogIXlr4bnoIHplJnor68nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zu+54mH6aqM6K+B56CB5qCh6aqM5aSx6LSlXG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogNDAxLFxuICAgICAgICBtc2c6ICflm77niYfpqozor4HnoIHkuI3mraPnoa4s6K+35qOA5p+l77yBJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlZyhjdHgpIHtcbiAgICAvLyDmjqXmlLblrqLmiLfnq6/nmoTmlbDmja5cbiAgICBjb25zdCB7IGJvZHkgfSA9IGN0eC5yZXF1ZXN0XG4gICAgLy8g5qCh6aqM6aqM6K+B56CB55qE5YaF5a6577yI5pe25pWI5oCn44CB5pyJ5pWI5oCn77yJXG4gICAgbGV0IHNpZCA9IGJvZHkuc2lkXG4gICAgbGV0IGNvZGUgPSBib2R5LmNvZGVcbiAgICBsZXQgbXNnID0ge31cbiAgICAvLyDpqozor4Hlm77niYfpqozor4HnoIHnmoTml7bmlYjmgKfjgIHmraPnoa7mgKdcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hlY2tDb2RlKHNpZCwgY29kZSlcbiAgICBsZXQgY2hlY2sgPSB0cnVlXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgLy8g5p+l5bqT77yM55yLdXNlcm5hbWXmmK/lkKbooqvms6jlhoxcbiAgICAgIGxldCB1c2VyMSA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lOiBib2R5LnVzZXJuYW1lIH0pXG4gICAgICBpZiAodXNlcjEgIT09IG51bGwgJiYgdHlwZW9mIHVzZXIxLnVzZXJuYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtc2cudXNlcm5hbWUgPSBbJ+atpOmCrueuseW3sue7j+azqOWGjO+8jOWPr+S7pemAmui/h+mCrueuseaJvuWbnuWvhueggSddXG4gICAgICAgIGNoZWNrID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGxldCB1c2VyMiA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IG5hbWU6IGJvZHkubmFtZSB9KVxuICAgICAgLy8g5p+l5bqT77yM55yLbmFtZeaYr+WQpuiiq+azqOWGjFxuICAgICAgaWYgKHVzZXIyICE9PSBudWxsICYmIHR5cGVvZiB1c2VyMi5uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtc2cubmFtZSA9IFsn5q2k5pi156ew5bey57uP6KKr5rOo5YaM77yM6K+35L+u5pS5J11cbiAgICAgICAgY2hlY2sgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8g5YaZ5YWl5pWw5o2u5Yiw5pWw5o2u5bqTXG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgYm9keS5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKGJvZHkucGFzc3dvcmQsIDUpXG4gICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoe1xuICAgICAgICAgIHVzZXJuYW1lOiBib2R5LnVzZXJuYW1lLFxuICAgICAgICAgIG5hbWU6IGJvZHkubmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogYm9keS5wYXNzd29yZCxcbiAgICAgICAgICBjcmVhdGVkOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdXNlci5zYXZlKClcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgICBtc2c6ICfms6jlhozmiJDlip8nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHZlZXZhbGlkYXRlIOaYvuekuueahOmUmeivr1xuICAgICAgbXNnLmNvZGUgPSBbJ+mqjOivgeeggeW3sue7j+WkseaViO+8jOivt+mHjeaWsOiOt+WPlu+8gSddXG4gICAgfVxuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgY29kZTogNTAwLFxuICAgICAgbXNnOiBtc2dcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2luQ29udHJvbGxlcigpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/PublicController.js":
/*!*************************************!*\
  !*** ./src/api/PublicController.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\n\nclass PublicController {\n  constructor() {}\n\n  async getCaptcha(ctx) {\n    const body = ctx.request.query;\n    const newCaptca = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n      size: 4,\n      ignoreChars: '0o1il',\n      color: true,\n      noise: Math.floor(Math.random() * 5),\n      width: 150,\n      height: 38\n    }); // 保存图片验证码数据，设置超时时间，单位: s\n    // 设置图片验证码超时10分钟\n\n    Object(_config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__[\"setValue\"])(body.sid, newCaptca.text, 10 * 60);\n    ctx.body = {\n      code: 200,\n      data: newCaptca.data\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanM/NjhhZSJdLCJuYW1lcyI6WyJQdWJsaWNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJnZXRDYXB0Y2hhIiwiY3R4IiwiYm9keSIsInJlcXVlc3QiLCJxdWVyeSIsIm5ld0NhcHRjYSIsInN2Z0NhcHRjaGEiLCJjcmVhdGUiLCJzaXplIiwiaWdub3JlQ2hhcnMiLCJjb2xvciIsIm5vaXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRWYWx1ZSIsInNpZCIsInRleHQiLCJjb2RlIiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBLE1BQU1BLGdCQUFOLENBQXVCO0FBQ3JCQyxhQUFXLEdBQUcsQ0FBRzs7QUFDRCxRQUFWQyxVQUFVLENBQUNDLEdBQUQsRUFBTTtBQUNwQixVQUFNQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxLQUF6QjtBQUNBLFVBQU1DLFNBQVMsR0FBR0Msa0RBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUNsQ0MsVUFBSSxFQUFFLENBRDRCO0FBRWxDQyxpQkFBVyxFQUFFLE9BRnFCO0FBR2xDQyxXQUFLLEVBQUUsSUFIMkI7QUFJbENDLFdBQUssRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUoyQjtBQUtsQ0MsV0FBSyxFQUFFLEdBTDJCO0FBTWxDQyxZQUFNLEVBQUU7QUFOMEIsS0FBbEIsQ0FBbEIsQ0FGb0IsQ0FVcEI7QUFDQTs7QUFDQUMsd0VBQVEsQ0FBQ2YsSUFBSSxDQUFDZ0IsR0FBTixFQUFXYixTQUFTLENBQUNjLElBQXJCLEVBQTJCLEtBQUssRUFBaEMsQ0FBUjtBQUNBbEIsT0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDVGtCLFVBQUksRUFBRSxHQURHO0FBRVRDLFVBQUksRUFBRWhCLFNBQVMsQ0FBQ2dCO0FBRlAsS0FBWDtBQUlEOztBQW5Cb0I7O0FBc0JSLG1FQUFJdkIsZ0JBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvUHVibGljQ29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdmdDYXB0Y2hhIGZyb20gJ3N2Zy1jYXB0Y2hhJ1xuaW1wb3J0IHsgZ2V0VmFsdWUsIHNldFZhbHVlIH0gZnJvbSAnQC9jb25maWcvUmVkaXNDb25maWcnXG5cblxuY2xhc3MgUHVibGljQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIGFzeW5jIGdldENhcHRjaGEoY3R4KSB7XG4gICAgY29uc3QgYm9keSA9IGN0eC5yZXF1ZXN0LnF1ZXJ5XG4gICAgY29uc3QgbmV3Q2FwdGNhID0gc3ZnQ2FwdGNoYS5jcmVhdGUoe1xuICAgICAgc2l6ZTogNCxcbiAgICAgIGlnbm9yZUNoYXJzOiAnMG8xaWwnLFxuICAgICAgY29sb3I6IHRydWUsXG4gICAgICBub2lzZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSksXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgaGVpZ2h0OiAzOCxcbiAgICB9KVxuICAgIC8vIOS/neWtmOWbvueJh+mqjOivgeeggeaVsOaNru+8jOiuvue9rui2heaXtuaXtumXtO+8jOWNleS9jTogc1xuICAgIC8vIOiuvue9ruWbvueJh+mqjOivgeeggei2heaXtjEw5YiG6ZKfXG4gICAgc2V0VmFsdWUoYm9keS5zaWQsIG5ld0NhcHRjYS50ZXh0LCAxMCAqIDYwKVxuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgZGF0YTogbmV3Q2FwdGNhLmRhdGEsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQdWJsaWNDb250cm9sbGVyKClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/PublicController.js\n");

/***/ }),

/***/ "./src/common/ErrorHandle.js":
/*!***********************************!*\
  !*** ./src/common/ErrorHandle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((ctx, next) => {\n  return next().catch(err => {\n    console.log(err);\n\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'Protected resource, use Authorization header to get access\\n'\n      };\n    } else {\n      ctx.status = err.status || 500;\n      ctx.body = Object.assign({\n        code: 500,\n        msg: err.message\n      },  true ? {\n        stack: err.stack\n      } : undefined); // console.log(err.stack);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0Vycm9ySGFuZGxlLmpzPzQxZWIiXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImJvZHkiLCJjb2RlIiwibXNnIiwiT2JqZWN0IiwiYXNzaWduIiwibWVzc2FnZSIsInByb2Nlc3MiLCJzdGFjayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFBQ0EsR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDNUIsU0FBT0EsSUFBSSxHQUFHQyxLQUFQLENBQWNDLEdBQUQsSUFBUztBQUMzQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBQ0EsUUFBSSxPQUFPQSxHQUFHLENBQUNHLE1BQWYsRUFBdUI7QUFDckJOLFNBQUcsQ0FBQ00sTUFBSixHQUFhLEdBQWI7QUFDQU4sU0FBRyxDQUFDTyxJQUFKLEdBQVc7QUFDVEMsWUFBSSxFQUFFLEdBREc7QUFFVEMsV0FBRyxFQUFFO0FBRkksT0FBWDtBQUlELEtBTkQsTUFNTztBQUNMVCxTQUFHLENBQUNNLE1BQUosR0FBYUgsR0FBRyxDQUFDRyxNQUFKLElBQWMsR0FBM0I7QUFDQU4sU0FBRyxDQUFDTyxJQUFKLEdBQVdHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3ZCSCxZQUFJLEVBQUUsR0FEaUI7QUFFdkJDLFdBQUcsRUFBRU4sR0FBRyxDQUFDUztBQUZjLE9BQWQsRUFHUkMsS0FBQSxHQUNEO0FBQUVDLGFBQUssRUFBRVgsR0FBRyxDQUFDVztBQUFiLE9BREMsR0FDc0IsU0FKZCxDQUFYLENBRkssQ0FPTDtBQUNEO0FBQ0YsR0FqQk0sQ0FBUDtBQWtCRCxDQW5CRCIsImZpbGUiOiIuL3NyYy9jb21tb24vRXJyb3JIYW5kbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoY3R4LCBuZXh0KSA9PiB7XG4gIHJldHVybiBuZXh0KCkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgaWYgKDQwMSA9PSBlcnIuc3RhdHVzKSB7XG4gICAgICBjdHguc3RhdHVzID0gNDAxO1xuICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIGNvZGU6IDQwMSxcbiAgICAgICAgbXNnOiAnUHJvdGVjdGVkIHJlc291cmNlLCB1c2UgQXV0aG9yaXphdGlvbiBoZWFkZXIgdG8gZ2V0IGFjY2Vzc1xcbidcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNTAwXG4gICAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb2RlOiA1MDAsXG4gICAgICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/XG4gICAgICAgIHsgc3RhY2s6IGVyci5zdGFjayB9IDoge30pXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgIH1cbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/ErrorHandle.js\n");

/***/ }),

/***/ "./src/common/Utils.js":
/*!*****************************!*\
  !*** ./src/common/Utils.js ***!
  \*****************************/
/*! exports provided: checkCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCode\", function() { return checkCode; });\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\nconst checkCode = async (key, value) => {\n  const redisData = await Object(_config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__[\"getValue\"])(key);\n\n  if (redisData != null) {\n    if (redisData.toLowerCase() === value.toLowerCase()) {\n      return true;\n    } else {\n      return false;\n    }\n  } else {\n    return false;\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1V0aWxzLmpzP2I0ZGYiXSwibmFtZXMiOlsiY2hlY2tDb2RlIiwia2V5IiwidmFsdWUiLCJyZWRpc0RhdGEiLCJnZXRWYWx1ZSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxLQUFaLEtBQXNCO0FBQ3RDLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyxvRUFBUSxDQUFDSCxHQUFELENBQWhDOztBQUNBLE1BQUlFLFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUNyQixRQUFJQSxTQUFTLENBQUNFLFdBQVYsT0FBNEJILEtBQUssQ0FBQ0csV0FBTixFQUFoQyxFQUFxRDtBQUNuRCxhQUFPLElBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLEtBQVA7QUFDRDtBQUNGLEdBTkQsTUFNTztBQUNMLFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FYRCIsImZpbGUiOiIuL3NyYy9jb21tb24vVXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRWYWx1ZSB9IGZyb20gJ0AvY29uZmlnL1JlZGlzQ29uZmlnJztcblxuY29uc3QgY2hlY2tDb2RlID0gYXN5bmMgKGtleSwgdmFsdWUpID0+IHtcbiAgY29uc3QgcmVkaXNEYXRhID0gYXdhaXQgZ2V0VmFsdWUoa2V5KVxuICBpZiAocmVkaXNEYXRhICE9IG51bGwpIHtcbiAgICBpZiAocmVkaXNEYXRhLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQge1xuICBjaGVja0NvZGVcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/Utils.js\n");

/***/ }),

/***/ "./src/config/DBHelpler.js":
/*!*********************************!*\
  !*** ./src/config/DBHelpler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n // 创建连接\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}); // 连接成功\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('connected', () => {\n  console.log('Mongoose connection open to ' + _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB_URL);\n}); // 连接异常\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', err => {\n  console.log('Mongoose connection error: ' + err);\n}); // 断开连接\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('disconnected', () => {\n  console.log('Mongoose connection disconnected');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL0RCSGVscGxlci5qcz9lNjg0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsImNvbmZpZyIsIkRCX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQUEsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsOENBQU0sQ0FBQ0MsTUFBeEIsRUFBZ0M7QUFDOUJDLGlCQUFlLEVBQUUsSUFEYTtBQUU5QkMsb0JBQWtCLEVBQUU7QUFGVSxDQUFoQyxFLENBS0E7O0FBQ0FMLCtDQUFRLENBQUNNLFVBQVQsQ0FBb0JDLEVBQXBCLENBQXVCLFdBQXZCLEVBQW9DLE1BQU07QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFpQ1AsOENBQU0sQ0FBQ0MsTUFBcEQ7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQUgsK0NBQVEsQ0FBQ00sVUFBVCxDQUFvQkMsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBaUNHLEdBQUQsSUFBUztBQUN2Q0YsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQWdDQyxHQUE1QztBQUNELENBRkQsRSxDQUlBOztBQUNBViwrQ0FBUSxDQUFDTSxVQUFULENBQW9CQyxFQUFwQixDQUF1QixjQUF2QixFQUF1QyxNQUFNO0FBQzNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNELENBRkQ7QUFJZVQsOEdBQWYiLCJmaWxlIjoiLi9zcmMvY29uZmlnL0RCSGVscGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9pbmRleCdcblxuLy8g5Yib5bu66L+e5o6lXG5tb25nb29zZS5jb25uZWN0KGNvbmZpZy5EQl9VUkwsIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbn0pXG5cbi8vIOi/nuaOpeaIkOWKn1xubW9uZ29vc2UuY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBvcGVuIHRvICcgKyBjb25maWcuREJfVVJMKTtcbn0pXG5cbi8vIOi/nuaOpeW8guW4uFxubW9uZ29vc2UuY29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdNb25nb29zZSBjb25uZWN0aW9uIGVycm9yOiAnICsgZXJyKTtcbn0pXG5cbi8vIOaWreW8gOi/nuaOpVxubW9uZ29vc2UuY29ubmVjdGlvbi5vbignZGlzY29ubmVjdGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBkaXNjb25uZWN0ZWQnKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/DBHelpler.js\n");

/***/ }),

/***/ "./src/config/MailConfig.js":
/*!**********************************!*\
  !*** ./src/config/MailConfig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n // async..await is not allowed in global scope, must use a wrapper\n\nasync function send(sendInfo) {\n  // Generate test SMTP service account from ethereal.email\n  // Only needed if you don't have a real mail account for testing\n  // let testAccount = await nodemailer.createTestAccount()\n  // create reusable transporter object using the default SMTP transport\n  let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n    host: 'smtp.qq.com',\n    port: 587,\n    secure: false,\n    // true for 465, false for other ports\n    auth: {\n      user: '420526391@qq.com',\n      // generated ethereal user\n      pass: 'nknypfsemabqbjfd' // generated ethereal password\n\n    }\n  }); // let sendInfo = {\n  //   code: '1234',\n  //   expire: '2019-10-01',\n  //   email: 'imoocbrian@qq.com',\n  //   user: 'Brian',\n  // }\n\n  let url = 'http://www.imooc.com'; // send mail with defined transport object\n\n  let info = await transporter.sendMail({\n    from: '\"认证邮件\" <420526391@qq.com>',\n    // sender address\n    to: sendInfo.email,\n    // list of receivers\n    subject: sendInfo.user !== '' ? `你好开发者，${sendInfo.user}！《慕课网前端全栈实践》注册码` : '《慕课网前端全栈实践》注册码',\n    // Subject line\n    text: `您在《慕课网前端全栈实践》课程中注册，您的邀请码是${sendInfo.code},邀请码的过期时间: ${sendInfo.expire}`,\n    // plain text body\n    html: `\n        <div style=\"border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;\">\n        <div style=\"height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;\">Imooc社区——欢迎来到官方社区</div>\n        <div style=\"padding: 25px\">\n          <div>您好，${sendInfo.user}童鞋，重置链接有效时间30分钟，请在${sendInfo.expire}之前重置您的密码：</div>\n          <a href=\"${url}\" style=\"padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;\">立即重置密码</a>\n          <div style=\"padding: 5px; background: #f2f2f2;\">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>\n        </div>\n        <div style=\"background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;\">系统邮件，请勿直接回复</div>\n    </div>\n    ` // html body\n\n  });\n  return 'Message sent: %s', info.messageId; // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n  // Preview only available when sending through an Ethereal account\n  // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))\n  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n} // main().catch(console.error)\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (send);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL01haWxDb25maWcuanM/MmRiMSJdLCJuYW1lcyI6WyJzZW5kIiwic2VuZEluZm8iLCJ0cmFuc3BvcnRlciIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInVybCIsImluZm8iLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsImVtYWlsIiwic3ViamVjdCIsInRleHQiLCJjb2RlIiwiZXhwaXJlIiwiaHRtbCIsIm1lc3NhZ2VJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0EsZUFBZUEsSUFBZixDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUI7QUFDQTtBQUNBO0FBRUE7QUFDQSxNQUFJQyxXQUFXLEdBQUdDLGlEQUFVLENBQUNDLGVBQVgsQ0FBMkI7QUFDM0NDLFFBQUksRUFBRSxhQURxQztBQUUzQ0MsUUFBSSxFQUFFLEdBRnFDO0FBRzNDQyxVQUFNLEVBQUUsS0FIbUM7QUFHNUI7QUFDZkMsUUFBSSxFQUFFO0FBQ0pDLFVBQUksRUFBRSxrQkFERjtBQUNzQjtBQUMxQkMsVUFBSSxFQUFFLGtCQUZGLENBRXNCOztBQUZ0QjtBQUpxQyxHQUEzQixDQUFsQixDQU40QixDQWdCNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlDLEdBQUcsR0FBRyxzQkFBVixDQXZCNEIsQ0F5QjVCOztBQUNBLE1BQUlDLElBQUksR0FBRyxNQUFNVixXQUFXLENBQUNXLFFBQVosQ0FBcUI7QUFDcENDLFFBQUksRUFBRSwyQkFEOEI7QUFDRDtBQUNuQ0MsTUFBRSxFQUFFZCxRQUFRLENBQUNlLEtBRnVCO0FBRWhCO0FBQ3BCQyxXQUFPLEVBQ0xoQixRQUFRLENBQUNRLElBQVQsS0FBa0IsRUFBbEIsR0FDSyxTQUFRUixRQUFRLENBQUNRLElBQUssaUJBRDNCLEdBRUksZ0JBTjhCO0FBTVo7QUFDeEJTLFFBQUksRUFBRyw0QkFBMkJqQixRQUFRLENBQUNrQixJQUN4QyxjQUFhbEIsUUFBUSxDQUFDbUIsTUFBTyxFQVJJO0FBUUQ7QUFDbkNDLFFBQUksRUFBRztBQUNYO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQnBCLFFBQVEsQ0FBQ1EsSUFBSyxxQkFBb0JSLFFBQVEsQ0FBQ21CLE1BQ3hEO0FBQ1AscUJBQXFCVCxHQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwQndDLENBb0JqQzs7QUFwQmlDLEdBQXJCLENBQWpCO0FBdUJBLFNBQU8sb0JBQW9CQyxJQUFJLENBQUNVLFNBQWhDLENBakQ0QixDQWtENUI7QUFFQTtBQUNBO0FBQ0E7QUFDRCxDLENBRUQ7OztBQUVldEIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29uZmlnL01haWxDb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xuXG4vLyBhc3luYy4uYXdhaXQgaXMgbm90IGFsbG93ZWQgaW4gZ2xvYmFsIHNjb3BlLCBtdXN0IHVzZSBhIHdyYXBwZXJcbmFzeW5jIGZ1bmN0aW9uIHNlbmQoc2VuZEluZm8pIHtcbiAgLy8gR2VuZXJhdGUgdGVzdCBTTVRQIHNlcnZpY2UgYWNjb3VudCBmcm9tIGV0aGVyZWFsLmVtYWlsXG4gIC8vIE9ubHkgbmVlZGVkIGlmIHlvdSBkb24ndCBoYXZlIGEgcmVhbCBtYWlsIGFjY291bnQgZm9yIHRlc3RpbmdcbiAgLy8gbGV0IHRlc3RBY2NvdW50ID0gYXdhaXQgbm9kZW1haWxlci5jcmVhdGVUZXN0QWNjb3VudCgpXG5cbiAgLy8gY3JlYXRlIHJldXNhYmxlIHRyYW5zcG9ydGVyIG9iamVjdCB1c2luZyB0aGUgZGVmYXVsdCBTTVRQIHRyYW5zcG9ydFxuICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgaG9zdDogJ3NtdHAucXEuY29tJyxcbiAgICBwb3J0OiA1ODcsXG4gICAgc2VjdXJlOiBmYWxzZSwgLy8gdHJ1ZSBmb3IgNDY1LCBmYWxzZSBmb3Igb3RoZXIgcG9ydHNcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiAnNDIwNTI2MzkxQHFxLmNvbScsIC8vIGdlbmVyYXRlZCBldGhlcmVhbCB1c2VyXG4gICAgICBwYXNzOiAnbmtueXBmc2VtYWJxYmpmZCcsIC8vIGdlbmVyYXRlZCBldGhlcmVhbCBwYXNzd29yZFxuICAgIH0sXG4gIH0pXG5cbiAgLy8gbGV0IHNlbmRJbmZvID0ge1xuICAvLyAgIGNvZGU6ICcxMjM0JyxcbiAgLy8gICBleHBpcmU6ICcyMDE5LTEwLTAxJyxcbiAgLy8gICBlbWFpbDogJ2ltb29jYnJpYW5AcXEuY29tJyxcbiAgLy8gICB1c2VyOiAnQnJpYW4nLFxuICAvLyB9XG5cbiAgbGV0IHVybCA9ICdodHRwOi8vd3d3Lmltb29jLmNvbSdcblxuICAvLyBzZW5kIG1haWwgd2l0aCBkZWZpbmVkIHRyYW5zcG9ydCBvYmplY3RcbiAgbGV0IGluZm8gPSBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgZnJvbTogJ1wi6K6k6K+B6YKu5Lu2XCIgPDQyMDUyNjM5MUBxcS5jb20+JywgLy8gc2VuZGVyIGFkZHJlc3NcbiAgICB0bzogc2VuZEluZm8uZW1haWwsIC8vIGxpc3Qgb2YgcmVjZWl2ZXJzXG4gICAgc3ViamVjdDpcbiAgICAgIHNlbmRJbmZvLnVzZXIgIT09ICcnXG4gICAgICAgID8gYOS9oOWlveW8gOWPkeiAhe+8jCR7c2VuZEluZm8udXNlcn3vvIHjgIrmhZXor77nvZHliY3nq6/lhajmoIjlrp7ot7XjgIvms6jlhoznoIFgXG4gICAgICAgIDogJ+OAiuaFleivvue9keWJjeerr+WFqOagiOWunui3teOAi+azqOWGjOeggScsIC8vIFN1YmplY3QgbGluZVxuICAgIHRleHQ6IGDmgqjlnKjjgIrmhZXor77nvZHliY3nq6/lhajmoIjlrp7ot7XjgIvor77nqIvkuK3ms6jlhozvvIzmgqjnmoTpgoDor7fnoIHmmK8ke3NlbmRJbmZvLmNvZGVcbiAgICAgIH0s6YKA6K+356CB55qE6L+H5pyf5pe26Ze0OiAke3NlbmRJbmZvLmV4cGlyZX1gLCAvLyBwbGFpbiB0ZXh0IGJvZHlcbiAgICBodG1sOiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO2NvbG9yOiAjNjc2NzY3O3dpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmctYm90dG9tOiA1MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNjBweDsgYmFja2dyb3VuZDogIzM5M2Q0OTsgbGluZS1oZWlnaHQ6IDYwcHg7IGNvbG9yOiAjNThhMzZmOyBmb250LXNpemU6IDE4cHg7cGFkZGluZy1sZWZ0OiAxMHB4O1wiPkltb29j56S+5Yy64oCU4oCU5qyi6L+O5p2l5Yiw5a6Y5pa556S+5Yy6PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAyNXB4XCI+XG4gICAgICAgICAgPGRpdj7mgqjlpb3vvIwke3NlbmRJbmZvLnVzZXJ956ul6Z6L77yM6YeN572u6ZO+5o6l5pyJ5pWI5pe26Ze0MzDliIbpkp/vvIzor7flnKgke3NlbmRJbmZvLmV4cGlyZVxuICAgICAgfeS5i+WJjemHjee9ruaCqOeahOWvhuegge+8mjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIke3VybH1cIiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMjBweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDllOTQ7IGRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IDE1cHggMDtcIj7nq4vljbPph43nva7lr4bnoIE8L2E+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDVweDsgYmFja2dyb3VuZDogI2YyZjJmMjtcIj7lpoLmnpzor6Xpgq7ku7bkuI3mmK/nlLHkvaDmnKzkurrmk43kvZzvvIzor7fli7/ov5vooYzmv4DmtLvvvIHlkKbliJnkvaDnmoTpgq7nrrHlsIbkvJrooqvku5bkurrnu5HlrprjgII8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmFmYWZhOyBjb2xvcjogI2I0YjRiNDt0ZXh0LWFsaWduOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiA0NXB4OyBoZWlnaHQ6IDQ1cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAwO3dpZHRoOiAxMDAlO1wiPuezu+e7n+mCruS7tu+8jOivt+WLv+ebtOaOpeWbnuWkjTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGAsIC8vIGh0bWwgYm9keVxuICB9KVxuXG4gIHJldHVybiAnTWVzc2FnZSBzZW50OiAlcycsIGluZm8ubWVzc2FnZUlkXG4gIC8vIE1lc3NhZ2Ugc2VudDogPGI2NThmOGNhLTYyOTYtY2NmNC04MzA2LTg3ZDU3YTBiNDMyMUBleGFtcGxlLmNvbT5cblxuICAvLyBQcmV2aWV3IG9ubHkgYXZhaWxhYmxlIHdoZW4gc2VuZGluZyB0aHJvdWdoIGFuIEV0aGVyZWFsIGFjY291bnRcbiAgLy8gY29uc29sZS5sb2coJ1ByZXZpZXcgVVJMOiAlcycsIG5vZGVtYWlsZXIuZ2V0VGVzdE1lc3NhZ2VVcmwoaW5mbykpXG4gIC8vIFByZXZpZXcgVVJMOiBodHRwczovL2V0aGVyZWFsLmVtYWlsL21lc3NhZ2UvV2FRS01nS2RkeFFEb291Li4uXG59XG5cbi8vIG1haW4oKS5jYXRjaChjb25zb2xlLmVycm9yKVxuXG5leHBvcnQgZGVmYXVsdCBzZW5kXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/MailConfig.js\n");

/***/ }),

/***/ "./src/config/RedisConfig.js":
/*!***********************************!*\
  !*** ./src/config/RedisConfig.js ***!
  \***********************************/
/*! exports provided: client, setValue, getValue, getHValue, delValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getValue\", function() { return getValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHValue\", function() { return getHValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delValue\", function() { return delValue; });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n\n\nconst options = {\n  host: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REDIS.host,\n  port: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REDIS.port,\n  password: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REDIS.password,\n  detect_buffers: true,\n  retry_strategy: function (options) {\n    if (options.error && options.error.code === 'ECONNREFUSED') {\n      // End reconnecting on a specific error and flush all commands with\n      // a individual error\n      return new Error('The server refused the connection');\n    }\n\n    if (options.total_retry_time > 1000 * 60 * 60) {\n      // End reconnecting after a specific timeout and flush all commands\n      // with a individual error\n      return new Error('Retry time exhausted');\n    }\n\n    if (options.attempt > 10) {\n      // End reconnecting with built in error\n      return undefined;\n    } // reconnect after\n\n\n    return Math.min(options.attempt * 100, 3000);\n  }\n}; // const client = redis.createClient(options)\n\nconst client = Object(bluebird__WEBPACK_IMPORTED_MODULE_1__[\"promisifyAll\"])(redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient(options));\nclient.on('error', err => {\n  console.log('Redis Client Error:' + err);\n});\n\nconst setValue = (key, value, time) => {\n  console.log('key', key);\n  console.log('value', value);\n  console.log('time', time);\n\n  if (typeof value === 'undefined' || value == null || value === '') {\n    return;\n  }\n\n  if (typeof value === 'string') {\n    if (typeof time !== 'undefined') {\n      client.set(key, value, 'EX', time);\n    } else {\n      client.set(key, value);\n    }\n  } else if (typeof value === 'object') {\n    // { key1: value1, key2: value2}\n    // Object.keys(value) => [key1, key2]\n    Object.keys(value).forEach(item => {\n      client.hset(key, item, value[item], redis__WEBPACK_IMPORTED_MODULE_0___default.a.print);\n    });\n  }\n}; // const {promisify} = require('util');\n// const getAsync = promisify(client.get).bind(client);\n\n\nconst getValue = key => {\n  return client.getAsync(key);\n};\n\nconst getHValue = key => {\n  // v8 Promisify method use util, must node > 8\n  // return promisify(client.hgetall).bind(client)(key)\n  // bluebird async\n  return client.hgetallAsync(key);\n};\n\nconst delValue = key => {\n  client.del(key, (err, res) => {\n    if (res === 1) {\n      console.log('delete successfully');\n    } else {\n      console.log('delete redis key error:' + err);\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL1JlZGlzQ29uZmlnLmpzP2I3ODkiXSwibmFtZXMiOlsib3B0aW9ucyIsImhvc3QiLCJjb25maWciLCJSRURJUyIsInBvcnQiLCJwYXNzd29yZCIsImRldGVjdF9idWZmZXJzIiwicmV0cnlfc3RyYXRlZ3kiLCJlcnJvciIsImNvZGUiLCJFcnJvciIsInRvdGFsX3JldHJ5X3RpbWUiLCJhdHRlbXB0IiwidW5kZWZpbmVkIiwiTWF0aCIsIm1pbiIsImNsaWVudCIsInByb21pc2lmeUFsbCIsInJlZGlzIiwiY3JlYXRlQ2xpZW50Iiwib24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInRpbWUiLCJzZXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJoc2V0IiwicHJpbnQiLCJnZXRWYWx1ZSIsImdldEFzeW5jIiwiZ2V0SFZhbHVlIiwiaGdldGFsbEFzeW5jIiwiZGVsVmFsdWUiLCJkZWwiLCJyZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUc7QUFDZEMsTUFBSSxFQUFFQyw4Q0FBTSxDQUFDQyxLQUFQLENBQWFGLElBREw7QUFFZEcsTUFBSSxFQUFFRiw4Q0FBTSxDQUFDQyxLQUFQLENBQWFDLElBRkw7QUFHZEMsVUFBUSxFQUFFSCw4Q0FBTSxDQUFDQyxLQUFQLENBQWFFLFFBSFQ7QUFJZEMsZ0JBQWMsRUFBRSxJQUpGO0FBS2RDLGdCQUFjLEVBQUUsVUFBVVAsT0FBVixFQUFtQjtBQUNqQyxRQUFJQSxPQUFPLENBQUNRLEtBQVIsSUFBaUJSLE9BQU8sQ0FBQ1EsS0FBUixDQUFjQyxJQUFkLEtBQXVCLGNBQTVDLEVBQTREO0FBQzFEO0FBQ0E7QUFDQSxhQUFPLElBQUlDLEtBQUosQ0FBVSxtQ0FBVixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSVYsT0FBTyxDQUFDVyxnQkFBUixHQUEyQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxFQUErQztBQUM3QztBQUNBO0FBQ0EsYUFBTyxJQUFJRCxLQUFKLENBQVUsc0JBQVYsQ0FBUDtBQUNEOztBQUNELFFBQUlWLE9BQU8sQ0FBQ1ksT0FBUixHQUFrQixFQUF0QixFQUEwQjtBQUN4QjtBQUNBLGFBQU9DLFNBQVA7QUFDRCxLQWRnQyxDQWVqQzs7O0FBQ0EsV0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNmLE9BQU8sQ0FBQ1ksT0FBUixHQUFrQixHQUEzQixFQUFnQyxJQUFoQyxDQUFQO0FBQ0Q7QUF0QmEsQ0FBaEIsQyxDQXlCQTs7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLDZEQUFZLENBQUNDLDRDQUFLLENBQUNDLFlBQU4sQ0FBbUJuQixPQUFuQixDQUFELENBQTNCO0FBRUFnQixNQUFNLENBQUNJLEVBQVAsQ0FBVSxPQUFWLEVBQW9CQyxHQUFELElBQVM7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUF3QkYsR0FBcEM7QUFDRCxDQUZEOztBQUlBLE1BQU1HLFFBQVEsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBYUMsSUFBYixLQUFzQjtBQUNyQ0wsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkUsR0FBbkI7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkcsS0FBckI7QUFDQUosU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkksSUFBcEI7O0FBQ0EsTUFBSSxPQUFPRCxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQSxLQUFLLElBQUksSUFBekMsSUFBaURBLEtBQUssS0FBSyxFQUEvRCxFQUFtRTtBQUNqRTtBQUNEOztBQUNELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixRQUFJLE9BQU9DLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JYLFlBQU0sQ0FBQ1ksR0FBUCxDQUFXSCxHQUFYLEVBQWdCQyxLQUFoQixFQUF1QixJQUF2QixFQUE2QkMsSUFBN0I7QUFDRCxLQUZELE1BRU87QUFDTFgsWUFBTSxDQUFDWSxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCO0FBQ0Q7QUFDRixHQU5ELE1BTU8sSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDO0FBQ0E7QUFDQUcsVUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLE9BQW5CLENBQTRCQyxJQUFELElBQVU7QUFDbkNoQixZQUFNLENBQUNpQixJQUFQLENBQVlSLEdBQVosRUFBaUJPLElBQWpCLEVBQXVCTixLQUFLLENBQUNNLElBQUQsQ0FBNUIsRUFBb0NkLDRDQUFLLENBQUNnQixLQUExQztBQUNELEtBRkQ7QUFHRDtBQUNGLENBcEJELEMsQ0FzQkE7QUFDQTs7O0FBRUEsTUFBTUMsUUFBUSxHQUFJVixHQUFELElBQVM7QUFDeEIsU0FBT1QsTUFBTSxDQUFDb0IsUUFBUCxDQUFnQlgsR0FBaEIsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTVksU0FBUyxHQUFJWixHQUFELElBQVM7QUFDekI7QUFDQTtBQUVBO0FBQ0EsU0FBT1QsTUFBTSxDQUFDc0IsWUFBUCxDQUFvQmIsR0FBcEIsQ0FBUDtBQUNELENBTkQ7O0FBUUEsTUFBTWMsUUFBUSxHQUFJZCxHQUFELElBQVM7QUFDeEJULFFBQU0sQ0FBQ3dCLEdBQVAsQ0FBV2YsR0FBWCxFQUFnQixDQUFDSixHQUFELEVBQU1vQixHQUFOLEtBQWM7QUFDNUIsUUFBSUEsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNibkIsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsYUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQTRCRixHQUF4QztBQUNEO0FBQ0YsR0FORDtBQU9ELENBUkQiLCJmaWxlIjoiLi9zcmMvY29uZmlnL1JlZGlzQ29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJ1xuaW1wb3J0IHsgcHJvbWlzaWZ5QWxsIH0gZnJvbSAnYmx1ZWJpcmQnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGhvc3Q6IGNvbmZpZy5SRURJUy5ob3N0LFxuICBwb3J0OiBjb25maWcuUkVESVMucG9ydCxcbiAgcGFzc3dvcmQ6IGNvbmZpZy5SRURJUy5wYXNzd29yZCxcbiAgZGV0ZWN0X2J1ZmZlcnM6IHRydWUsXG4gIHJldHJ5X3N0cmF0ZWd5OiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmVycm9yICYmIG9wdGlvbnMuZXJyb3IuY29kZSA9PT0gJ0VDT05OUkVGVVNFRCcpIHtcbiAgICAgIC8vIEVuZCByZWNvbm5lY3Rpbmcgb24gYSBzcGVjaWZpYyBlcnJvciBhbmQgZmx1c2ggYWxsIGNvbW1hbmRzIHdpdGhcbiAgICAgIC8vIGEgaW5kaXZpZHVhbCBlcnJvclxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIHNlcnZlciByZWZ1c2VkIHRoZSBjb25uZWN0aW9uJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRvdGFsX3JldHJ5X3RpbWUgPiAxMDAwICogNjAgKiA2MCkge1xuICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyBhZnRlciBhIHNwZWNpZmljIHRpbWVvdXQgYW5kIGZsdXNoIGFsbCBjb21tYW5kc1xuICAgICAgLy8gd2l0aCBhIGluZGl2aWR1YWwgZXJyb3JcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JldHJ5IHRpbWUgZXhoYXVzdGVkJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF0dGVtcHQgPiAxMCkge1xuICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyB3aXRoIGJ1aWx0IGluIGVycm9yXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyByZWNvbm5lY3QgYWZ0ZXJcbiAgICByZXR1cm4gTWF0aC5taW4ob3B0aW9ucy5hdHRlbXB0ICogMTAwLCAzMDAwKTtcbiAgfVxufVxuXG4vLyBjb25zdCBjbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQob3B0aW9ucylcbmNvbnN0IGNsaWVudCA9IHByb21pc2lmeUFsbChyZWRpcy5jcmVhdGVDbGllbnQob3B0aW9ucykpXG5cbmNsaWVudC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdSZWRpcyBDbGllbnQgRXJyb3I6JyArIGVycilcbn0pXG5cbmNvbnN0IHNldFZhbHVlID0gKGtleSwgdmFsdWUsIHRpbWUpID0+IHtcbiAgY29uc29sZS5sb2coJ2tleScsIGtleSlcbiAgY29uc29sZS5sb2coJ3ZhbHVlJywgdmFsdWUpXG4gIGNvbnNvbGUubG9nKCd0aW1lJywgdGltZSlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgdGltZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsaWVudC5zZXQoa2V5LCB2YWx1ZSwgJ0VYJywgdGltZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgLy8geyBrZXkxOiB2YWx1ZTEsIGtleTI6IHZhbHVlMn1cbiAgICAvLyBPYmplY3Qua2V5cyh2YWx1ZSkgPT4gW2tleTEsIGtleTJdXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNsaWVudC5oc2V0KGtleSwgaXRlbSwgdmFsdWVbaXRlbV0sIHJlZGlzLnByaW50KVxuICAgIH0pXG4gIH1cbn1cblxuLy8gY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKCd1dGlsJyk7XG4vLyBjb25zdCBnZXRBc3luYyA9IHByb21pc2lmeShjbGllbnQuZ2V0KS5iaW5kKGNsaWVudCk7XG5cbmNvbnN0IGdldFZhbHVlID0gKGtleSkgPT4ge1xuICByZXR1cm4gY2xpZW50LmdldEFzeW5jKGtleSlcbn1cblxuY29uc3QgZ2V0SFZhbHVlID0gKGtleSkgPT4ge1xuICAvLyB2OCBQcm9taXNpZnkgbWV0aG9kIHVzZSB1dGlsLCBtdXN0IG5vZGUgPiA4XG4gIC8vIHJldHVybiBwcm9taXNpZnkoY2xpZW50LmhnZXRhbGwpLmJpbmQoY2xpZW50KShrZXkpXG5cbiAgLy8gYmx1ZWJpcmQgYXN5bmNcbiAgcmV0dXJuIGNsaWVudC5oZ2V0YWxsQXN5bmMoa2V5KVxufVxuXG5jb25zdCBkZWxWYWx1ZSA9IChrZXkpID0+IHtcbiAgY2xpZW50LmRlbChrZXksIChlcnIsIHJlcykgPT4ge1xuICAgIGlmIChyZXMgPT09IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgcmVkaXMga2V5IGVycm9yOicgKyBlcnIpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQge1xuICBjbGllbnQsXG4gIHNldFZhbHVlLFxuICBnZXRWYWx1ZSxcbiAgZ2V0SFZhbHVlLFxuICBkZWxWYWx1ZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/RedisConfig.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DB_URL = 'mongodb://test:d6905295@47.105.85.212:27017/testdb';\nconst REDIS = {\n  host: '47.105.85.212',\n  port: 15001,\n  password: '123456'\n};\nconst JWT_SECRET = 'a&*38QthAKuiRwISGLotgq^3%^$zvA3A6Hfr8MF$jM*HY4*dWcwAW&9NGp7*b53!';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  DB_URL,\n  REDIS,\n  JWT_SECRET\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzP2YxMjEiXSwibmFtZXMiOlsiREJfVVJMIiwiUkVESVMiLCJob3N0IiwicG9ydCIsInBhc3N3b3JkIiwiSldUX1NFQ1JFVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUcsb0RBQWY7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBSSxFQUFFLGVBRE07QUFFWkMsTUFBSSxFQUFFLEtBRk07QUFHWkMsVUFBUSxFQUFFO0FBSEUsQ0FBZDtBQUtBLE1BQU1DLFVBQVUsR0FBRyxrRUFBbkI7QUFFZTtBQUNiTCxRQURhO0FBRWJDLE9BRmE7QUFHYkk7QUFIYSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbmZpZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERCX1VSTCA9ICdtb25nb2RiOi8vdGVzdDpkNjkwNTI5NUA0Ny4xMDUuODUuMjEyOjI3MDE3L3Rlc3RkYidcbmNvbnN0IFJFRElTID0ge1xuICBob3N0OiAnNDcuMTA1Ljg1LjIxMicsXG4gIHBvcnQ6IDE1MDAxLFxuICBwYXNzd29yZDogJzEyMzQ1Nidcbn1cbmNvbnN0IEpXVF9TRUNSRVQgPSAnYSYqMzhRdGhBS3VpUndJU0dMb3RncV4zJV4kenZBM0E2SGZyOE1GJGpNKkhZNCpkV2N3QVcmOU5HcDcqYjUzISdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBEQl9VUkwsXG4gIFJFRElTLFxuICBKV1RfU0VDUkVUXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/ErrorHandle */ \"./src/common/ErrorHandle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nconst isDevMode =  false ? undefined : true; // 定义公共路径，不需要jwt鉴权\n\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: _config_index__WEBPACK_IMPORTED_MODULE_11__[\"default\"].JWT_SECRET\n}).unless({\n  path: [/^\\/public/, /\\/login/, /\\/forget/]\n});\n/**\n * 使用koa-compose 集成中间件\n */\n\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_9___default()([koa_body__WEBPACK_IMPORTED_MODULE_6___default()(), koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../public')), _koa_cors__WEBPACK_IMPORTED_MODULE_8___default()(), koa_json__WEBPACK_IMPORTED_MODULE_7___default()({\n  pretty: false,\n  param: 'pretty'\n}), koa_helmet__WEBPACK_IMPORTED_MODULE_3___default()(), _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__[\"default\"], jwt]);\n\nif (!isDevMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_10___default()());\n}\n\nlet port = !isDevMode ? 12005 : 3000;\napp.use(middleware);\napp.use(Object(_routes_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\napp.listen(port, () => {\n  console.log('服务运行在：' + port);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhcHAiLCJrb2EiLCJpc0Rldk1vZGUiLCJwcm9jZXNzIiwiand0IiwiSldUIiwic2VjcmV0IiwiY29uZmlnIiwiSldUX1NFQ1JFVCIsInVubGVzcyIsInBhdGgiLCJtaWRkbGV3YXJlIiwiY29tcG9zZSIsImtvYUJvZHkiLCJzdGF0aWNzIiwiam9pbiIsIl9fZGlybmFtZSIsImNvcnMiLCJqc29udXRpbCIsInByZXR0eSIsInBhcmFtIiwiaGVsbWV0IiwiZXJyb3JIYW5kbGUiLCJ1c2UiLCJjb21wcmVzcyIsInBvcnQiLCJyb3V0ZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyxJQUFJQywwQ0FBSixFQUFaO0FBRUEsTUFBTUMsU0FBUyxHQUFHQyxNQUFBLEdBQXdDLFNBQXhDLEdBQWdELElBQWxFLEMsQ0FFQTs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLDhDQUFHLENBQUM7QUFBRUMsUUFBTSxFQUFFQyxzREFBTSxDQUFDQztBQUFqQixDQUFELENBQUgsQ0FBbUNDLE1BQW5DLENBQTBDO0FBQUVDLE1BQUksRUFBRSxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLFVBQXpCO0FBQVIsQ0FBMUMsQ0FBWjtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLGtEQUFPLENBQUMsQ0FDekJDLCtDQUFPLEVBRGtCLEVBRXpCQyxpREFBTyxDQUFDSiwyQ0FBSSxDQUFDSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsV0FBckIsQ0FBRCxDQUZrQixFQUd6QkMsZ0RBQUksRUFIcUIsRUFJekJDLCtDQUFRLENBQUM7QUFBRUMsUUFBTSxFQUFFLEtBQVY7QUFBaUJDLE9BQUssRUFBRTtBQUF4QixDQUFELENBSmlCLEVBS3pCQyxpREFBTSxFQUxtQixFQU16QkMsNERBTnlCLEVBT3pCbEIsR0FQeUIsQ0FBRCxDQUExQjs7QUFVQSxJQUFJLENBQUNGLFNBQUwsRUFBZ0I7QUFDZEYsS0FBRyxDQUFDdUIsR0FBSixDQUFRQyxvREFBUSxFQUFoQjtBQUNEOztBQUVELElBQUlDLElBQUksR0FBRyxDQUFDdkIsU0FBRCxHQUFhLEtBQWIsR0FBcUIsSUFBaEM7QUFFQUYsR0FBRyxDQUFDdUIsR0FBSixDQUFRWixVQUFSO0FBQ0FYLEdBQUcsQ0FBQ3VCLEdBQUosQ0FBUUcsOERBQU0sRUFBZDtBQUVBMUIsR0FBRyxDQUFDMkIsTUFBSixDQUFXRixJQUFYLEVBQWlCLE1BQU07QUFDckJHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVdKLElBQXZCO0FBQ0QsQ0FGRCxFIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYSBmcm9tICdrb2EnXG5pbXBvcnQgSldUIGZyb20gJ2tvYS1qd3QnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdrb2EtaGVsbWV0J1xuaW1wb3J0IHN0YXRpY3MgZnJvbSAna29hLXN0YXRpYydcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvcm91dGVzJ1xuaW1wb3J0IGtvYUJvZHkgZnJvbSAna29hLWJvZHknXG5pbXBvcnQganNvbnV0aWwgZnJvbSAna29hLWpzb24nXG5pbXBvcnQgY29ycyBmcm9tICdAa29hL2NvcnMnXG5pbXBvcnQgY29tcG9zZSBmcm9tICdrb2EtY29tcG9zZSdcbmltcG9ydCBjb21wcmVzcyBmcm9tICdrb2EtY29tcHJlc3MnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2luZGV4J1xuaW1wb3J0IGVycm9ySGFuZGxlIGZyb20gJy4vY29tbW9uL0Vycm9ySGFuZGxlJ1xuXG5jb25zdCBhcHAgPSBuZXcga29hKClcblxuY29uc3QgaXNEZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGZhbHNlIDogdHJ1ZVxuXG4vLyDlrprkuYnlhazlhbHot6/lvoTvvIzkuI3pnIDopoFqd3TpibTmnYNcbmNvbnN0IGp3dCA9IEpXVCh7IHNlY3JldDogY29uZmlnLkpXVF9TRUNSRVQgfSkudW5sZXNzKHsgcGF0aDogWy9eXFwvcHVibGljLywgL1xcL2xvZ2luLywgL1xcL2ZvcmdldC9dIH0pXG5cbi8qKlxuICog5L2/55Soa29hLWNvbXBvc2Ug6ZuG5oiQ5Lit6Ze05Lu2XG4gKi9cbmNvbnN0IG1pZGRsZXdhcmUgPSBjb21wb3NlKFtcbiAga29hQm9keSgpLFxuICBzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSksXG4gIGNvcnMoKSxcbiAganNvbnV0aWwoeyBwcmV0dHk6IGZhbHNlLCBwYXJhbTogJ3ByZXR0eScgfSksXG4gIGhlbG1ldCgpLFxuICBlcnJvckhhbmRsZSxcbiAgand0XG5dKVxuXG5pZiAoIWlzRGV2TW9kZSkge1xuICBhcHAudXNlKGNvbXByZXNzKCkpXG59XG5cbmxldCBwb3J0ID0gIWlzRGV2TW9kZSA/IDEyMDA1IDogMzAwMFxuXG5hcHAudXNlKG1pZGRsZXdhcmUpXG5hcHAudXNlKHJvdXRlcigpKVxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ+acjeWKoei/kOihjOWcqO+8micgKyBwb3J0KVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_DBHelpler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/DBHelpler */ \"./src/config/DBHelpler.js\");\n\nconst Schema = _config_DBHelpler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Schema;\nconst UserSchema = new Schema({\n  'username': {\n    type: String\n  },\n  'name': {\n    type: String\n  },\n  'password': {\n    type: String\n  }\n});\nconst UserModel = _config_DBHelpler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].model('users', UserSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVXNlci5qcz83NmZlIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJVc2VyTW9kZWwiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyx5REFBUSxDQUFDRCxNQUF4QjtBQUVBLE1BQU1FLFVBQVUsR0FBRyxJQUFJRixNQUFKLENBQVc7QUFDNUIsY0FBWTtBQUFFRyxRQUFJLEVBQUVDO0FBQVIsR0FEZ0I7QUFFNUIsVUFBUTtBQUFFRCxRQUFJLEVBQUVDO0FBQVIsR0FGb0I7QUFHNUIsY0FBWTtBQUFFRCxRQUFJLEVBQUVDO0FBQVI7QUFIZ0IsQ0FBWCxDQUFuQjtBQU1BLE1BQU1DLFNBQVMsR0FBR0oseURBQVEsQ0FBQ0ssS0FBVCxDQUFlLE9BQWYsRUFBd0JKLFVBQXhCLENBQWxCO0FBRWVHLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL21vZGVsL1VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnQC9jb25maWcvREJIZWxwbGVyJ1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAndXNlcm5hbWUnOiB7IHR5cGU6IFN0cmluZyB9LFxuICAnbmFtZSc6IHsgdHlwZTogU3RyaW5nIH0sXG4gICdwYXNzd29yZCc6IHsgdHlwZTogU3RyaW5nIH0sXG59KVxuXG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbCgndXNlcnMnLCBVc2VyU2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/model/User.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\nrouter.prefix('/login');\nrouter.post('/forget', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forget);\nrouter.post('/login', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login);\nrouter.post('/reg', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reg);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2xvZ2luUm91dGVyLmpzPzNkZDEiXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImZvcmdldCIsImxvZ2luIiwicmVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsaURBQUosRUFBZjtBQUVBRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxRQUFkO0FBRUFGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFNBQVosRUFBdUJDLDREQUFlLENBQUNDLE1BQXZDO0FBQ0FMLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFFBQVosRUFBc0JDLDREQUFlLENBQUNFLEtBQXRDO0FBQ0FOLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLE1BQVosRUFBb0JDLDREQUFlLENBQUNHLEdBQXBDO0FBRWVQLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9sb2dpblJvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcbmltcG9ydCBsb2dpbkNvbnRyb2xsZXIgZnJvbSAnQC9hcGkvTG9naW5Db250cm9sbGVyJ1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcblxucm91dGVyLnByZWZpeCgnL2xvZ2luJylcblxucm91dGVyLnBvc3QoJy9mb3JnZXQnLCBsb2dpbkNvbnRyb2xsZXIuZm9yZ2V0KVxucm91dGVyLnBvc3QoJy9sb2dpbicsIGxvZ2luQ29udHJvbGxlci5sb2dpbilcbnJvdXRlci5wb3N0KCcvcmVnJywgbG9naW5Db250cm9sbGVyLnJlZylcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

/***/ }),

/***/ "./src/routes/publicRouter.js":
/*!************************************!*\
  !*** ./src/routes/publicRouter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_PublicController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/PublicController */ \"./src/api/PublicController.js\");\n\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\nrouter.prefix('/public');\nrouter.get('/getCaptcha', _api_PublicController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCaptcha);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3B1YmxpY1JvdXRlci5qcz9kM2M1Il0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsInByZWZpeCIsImdldCIsInB1YmxpY0NvbnRyb2xsZXIiLCJnZXRDYXB0Y2hhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsaURBQUosRUFBZjtBQUVBRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxTQUFkO0FBRUFGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLGFBQVgsRUFBMEJDLDZEQUFnQixDQUFDQyxVQUEzQztBQUVlTCxxRUFBZiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcHVibGljUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xuaW1wb3J0IHB1YmxpY0NvbnRyb2xsZXIgZnJvbSAnLi4vYXBpL1B1YmxpY0NvbnRyb2xsZXInXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXG5yb3V0ZXIucHJlZml4KCcvcHVibGljJylcblxucm91dGVyLmdldCgnL2dldENhcHRjaGEnLCBwdWJsaWNDb250cm9sbGVyLmdldENhcHRjaGEpXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/publicRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _publicRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicRouter */ \"./src/routes/publicRouter.js\");\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginRouter */ \"./src/routes/loginRouter.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_publicRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _loginRouter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJwdWJsaWNSb3V0ZXIiLCJsb2dpblJvdXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlQSx5SEFBYSxDQUFDQyxxREFBRCxFQUFlQyxvREFBZixDQUE1QiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbWJpbmVSb3V0ZXMgZnJvbSAna29hLWNvbWJpbmUtcm91dGVycydcblxuaW1wb3J0IHB1YmxpY1JvdXRlciBmcm9tICcuL3B1YmxpY1JvdXRlcidcbmltcG9ydCBsb2dpblJvdXRlciBmcm9tICcuL2xvZ2luUm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUm91dGVzKHB1YmxpY1JvdXRlciwgbG9naW5Sb3V0ZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL2NvcnNcIj9hNjk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrb2EvY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrb2EvY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/cors\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJibHVlYmlyZFwiPzJjNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmx1ZWJpcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibHVlYmlyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bluebird\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-body\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-compose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcG9zZVwiPzczMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWNvbXBvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtY29tcG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-compose\n");

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-compress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcHJlc3NcIj9hNmY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS1jb21wcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1jb21wcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-compress\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtanNvblwiPzY1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-json\n");

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-jwt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etand0XCI/ZWIwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etand0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWp3dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-jwt\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCI/M2Q1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlbWFpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nodemailer\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWRpc1wiPzcwNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWRpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redis\n");

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"svg-captcha\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdmctY2FwdGNoYVwiP2NjNjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3ZnLWNhcHRjaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdmctY2FwdGNoYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///svg-captcha\n");

/***/ })

/******/ });