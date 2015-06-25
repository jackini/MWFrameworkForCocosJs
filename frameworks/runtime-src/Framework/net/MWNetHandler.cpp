#include "MWNetHandler.h"

#include "cocos2d.h"
#include "MWNetResponse.h"

#include <new>

using namespace cocos2d;
using namespace std;

MW_FRAMEWORK_BEGIN

MWNetHandler *MWNetHandler::create()
{
    auto pRet = new (nothrow) MWNetHandler();
    if (pRet) {
        pRet->autorelease();
        return pRet;
    }
    return nullptr;
}

void MWNetHandler::handleSuccessfulMessage(mwframework::MWNetResponse *response)
{
#if MW_ENABLE_SCRIPT_BINDING
    if (_scriptType == kScriptTypeLua) {
    } else if (_scriptType == kScriptTypeJavascript) {
        // todo js
    }
#endif
}

void MWNetHandler::handleFailedMessage(mwframework::MWNetResponse *response)
{
#if MW_ENABLE_SCRIPT_BINDING
    if (_scriptType == kScriptTypeLua) {
    } else if (_scriptType == kScriptTypeJavascript) {
        // todo js
    }
#endif
}

MW_FRAMEWORK_END
