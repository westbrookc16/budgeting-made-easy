using Newtonsoft.Json;

namespace budgetmanagementAngular.viewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class TokenRequestViewModel
    {
        #region Constructor
        public TokenRequestViewModel()
        {

        }
        #endregion

        #region Properties
        public string grant_type { get; set; }
        public string client_id { get; set; }
        public string client_secret { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        #endregion
    }
}
