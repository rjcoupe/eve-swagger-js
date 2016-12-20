/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.2.dev3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads);
  }
}(this, function(ApiClient, GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads) {
  'use strict';




  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails</code>.
   * extractor_details object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails
   * @class
   * @param cycleTime {Integer} in seconds
   * @param headRadius {Number} head_radius number
   * @param heads {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads>} heads array
   * @param productTypeId {Integer} product_type_id integer
   * @param qtyPerCycle {Integer} qty_per_cycle integer
   */
  var exports = function(cycleTime, headRadius, heads, productTypeId, qtyPerCycle) {
    var _this = this;

    _this['cycle_time'] = cycleTime;
    _this['head_radius'] = headRadius;
    _this['heads'] = heads;
    _this['product_type_id'] = productTypeId;
    _this['qty_per_cycle'] = qtyPerCycle;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cycle_time')) {
        obj['cycle_time'] = ApiClient.convertToType(data['cycle_time'], 'Integer');
      }
      if (data.hasOwnProperty('head_radius')) {
        obj['head_radius'] = ApiClient.convertToType(data['head_radius'], 'Number');
      }
      if (data.hasOwnProperty('heads')) {
        obj['heads'] = ApiClient.convertToType(data['heads'], [GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads]);
      }
      if (data.hasOwnProperty('product_type_id')) {
        obj['product_type_id'] = ApiClient.convertToType(data['product_type_id'], 'Integer');
      }
      if (data.hasOwnProperty('qty_per_cycle')) {
        obj['qty_per_cycle'] = ApiClient.convertToType(data['qty_per_cycle'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * in seconds
   * @member {Integer} cycle_time
   */
  exports.prototype['cycle_time'] = undefined;
  /**
   * head_radius number
   * @member {Number} head_radius
   */
  exports.prototype['head_radius'] = undefined;
  /**
   * heads array
   * @member {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads>} heads
   */
  exports.prototype['heads'] = undefined;
  /**
   * product_type_id integer
   * @member {Integer} product_type_id
   */
  exports.prototype['product_type_id'] = undefined;
  /**
   * qty_per_cycle integer
   * @member {Integer} qty_per_cycle
   */
  exports.prototype['qty_per_cycle'] = undefined;



  return exports;
}));

